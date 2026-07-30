import { jsPDF } from "jspdf";
import { portfolioData, type PortfolioData } from "../data/portfolio";
import { formatYearsPlus, getTotalExperience, withDynamicYears } from "./index";

type RGB = [number, number, number];

/**
 * Existing roles only — values tuned for recruiter/print standards:
 * high-contrast body, print-safe secondary grey, conservative navy/teal,
 * professional header (no bright marketing gradients).
 */
const C = {
  navy: [30, 58, 95] as RGB, // #1e3a5f — classic resume navy for headings
  teal: [27, 79, 114] as RGB, // #1b4f72 — soft corporate navy-blue, matches header tone
  ink: [30, 41, 59] as RGB, // #1e293b — near-black body for ATS & print
  muted: [71, 85, 105] as RGB, // #475569 — dates/meta still readable on B&W
  pill: [30, 58, 138] as RGB, // same as headerL — skill chips match header
  sidebar: [248, 250, 252] as RGB, // #f8fafc
  white: [255, 255, 255] as RGB,
  headerL: [15, 23, 42] as RGB, // #0f172a — deep navy header
  headerR: [30, 58, 138] as RGB, // #1e3a8a
};

/** A4-friendly type scale (pt). Body ~11pt for strong print readability. */
const F = {
  name: 28,
  role: 12.5,
  tagline: 10,
  contact: 9.5,
  section: 13,
  jobTitle: 11.5,
  company: 10.5,
  meta: 9.5,
  label: 10,
  body: 11,
  pill: 9,
  sidebar: 10,
};

const LH = {
  body: 4.8,
  meta: 4.2,
  tight: 4.0,
};

const PAGE_W = 210;
const PAGE_H = 297;
const M = 11;
const HEADER_H = 62;
const LEFT_X = M;
const LEFT_W = 108;
const RIGHT_X = 132;
const RIGHT_W = 67;
/** Right edge for period / location / role labels (closer to sidebar). */
const META_RIGHT_X = RIGHT_X - 10;
const BOTTOM = 14;
const PAGE_TOP = 14; // content top margin on page 2+ (no banner header)

type Doc = jsPDF;

function setText(doc: Doc, rgb: RGB) {
  doc.setTextColor(rgb[0], rgb[1], rgb[2]);
}

function setFill(doc: Doc, rgb: RGB) {
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
}

function wrap(doc: Doc, text: string, width: number): string[] {
  return doc.splitTextToSize(text, width) as string[];
}

function linkedInHandle(url: string): string {
  const match = url.match(/linkedin\.com\/in\/([^/?#]+)/i);
  if (!match) return "@linkedin";
  return `@${match[1].replace(/-b36713a0$/i, "")}`;
}

function shortLocation(address: string): string {
  if (/gurugram/i.test(address)) return "Gurugram, India";
  if (/delhi/i.test(address)) return "Delhi, India";
  if (/pune/i.test(address)) return "Pune, India";
  return address.replace(/\s·\sRemote/i, "").trim();
}

async function loadProfileImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

async function circularPhoto(
  doc: Doc,
  dataUrl: string,
  cx: number,
  cy: number,
  radius: number
) {
  setFill(doc, C.white);
  doc.circle(cx, cy, radius + 1.1, "F");

  const clipped = await new Promise<string | null>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(null);
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0, size, size);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });

  if (clipped) {
    doc.addImage(
      clipped,
      "PNG",
      cx - radius,
      cy - radius,
      radius * 2,
      radius * 2
    );
  }
}

function drawGradientHeader(doc: Doc) {
  const steps = 48;
  const stepW = PAGE_W / steps;
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    doc.setFillColor(
      Math.round(C.headerL[0] + (C.headerR[0] - C.headerL[0]) * t),
      Math.round(C.headerL[1] + (C.headerR[1] - C.headerL[1]) * t),
      Math.round(C.headerL[2] + (C.headerR[2] - C.headerL[2]) * t)
    );
    doc.rect(i * stepW, 0, stepW + 0.4, HEADER_H, "F");
  }
}

function drawSidebar(doc: Doc, fullHeight = false) {
  setFill(doc, C.sidebar);
  const top = fullHeight ? 0 : HEADER_H;
  doc.rect(RIGHT_X - 4, top, PAGE_W - (RIGHT_X - 4), PAGE_H - top, "F");
}

function heading(
  doc: Doc,
  title: string,
  x: number,
  y: number,
  bar: RGB = C.teal
): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(F.section);
  setText(doc, C.navy);
  doc.text(title.toUpperCase(), x, y);
  doc.setDrawColor(...bar);
  doc.setLineWidth(1.35);
  doc.line(x, y + 2, x + 16, y + 2);
  return y + 9.5;
}

function skillPills(
  doc: Doc,
  skills: string[],
  x: number,
  y: number,
  maxW: number
): number {
  let cx = x;
  let cy = y;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(F.pill);

  for (const skill of skills) {
    const tw = doc.getTextWidth(skill);
    const pillW = tw + 5;
    if (cx + pillW > x + maxW) {
      cx = x;
      cy += 8.2;
    }
    setFill(doc, C.pill);
    doc.roundedRect(cx, cy - 4.2, pillW, 6.2, 1.5, 1.5, "F");
    setText(doc, C.white);
    doc.text(skill, cx + 2.5, cy);
    cx += pillW + 2.2;
  }
  return cy + 6;
}

function languageDots(
  doc: Doc,
  items: { name: string; level: number }[],
  x: number,
  y: number
): number {
  for (const lang of items) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.sidebar);
    setText(doc, C.ink);
    doc.text(lang.name, x, y);
    for (let i = 0; i < 5; i++) {
      const dx = x + 34 + i * 5.2;
      if (i < lang.level) {
        setFill(doc, C.navy);
        doc.circle(dx, y - 1.2, 1.45, "F");
      } else {
        doc.setDrawColor(...C.navy);
        doc.setLineWidth(0.35);
        doc.circle(dx, y - 1.2, 1.45, "S");
      }
    }
    y += 7.6;
  }
  return y;
}

type Cursor = { y: number; page: number };

function newPage(doc: Doc, cursor: Cursor): void {
  doc.addPage();
  cursor.page += 1;
  drawSidebar(doc, true);
  cursor.y = PAGE_TOP;
}

function need(doc: Doc, cursor: Cursor, h: number) {
  if (cursor.y + h > PAGE_H - BOTTOM) newPage(doc, cursor);
}

function drawIconPhone(doc: Doc, x: number, y: number, color: RGB) {
  doc.setDrawColor(...color);
  doc.setLineWidth(0.4);
  doc.roundedRect(x + 0.35, y - 2.8, 2.3, 3.8, 0.7, 0.7, "S");
  doc.setLineWidth(0.55);
  doc.line(x + 0.35, y - 1.7, x + 2.65, y - 1.7);
  doc.line(x + 0.35, y + 0.1, x + 2.65, y + 0.1);
}

function drawIconEmail(doc: Doc, x: number, y: number, color: RGB) {
  doc.setDrawColor(...color);
  doc.setLineWidth(0.4);
  doc.roundedRect(x, y - 2.5, 3.8, 2.8, 0.25, 0.25, "S");
  doc.line(x, y - 2.5, x + 1.9, y - 0.55);
  doc.line(x + 3.8, y - 2.5, x + 1.9, y - 0.55);
}

function drawIconLocation(doc: Doc, x: number, y: number, color: RGB) {
  doc.setDrawColor(...color);
  doc.setFillColor(...color);
  doc.setLineWidth(0.4);
  // Map pin: circle + point
  doc.circle(x + 1.5, y - 1.7, 1.4, "S");
  doc.circle(x + 1.5, y - 1.7, 0.5, "F");
  doc.setLineWidth(0.55);
  doc.line(x + 1.5, y - 0.25, x + 1.5, y + 1.15);
}

function drawIconLinkedIn(doc: Doc, x: number, y: number, color: RGB) {
  doc.setDrawColor(...color);
  doc.setLineWidth(0.4);
  doc.roundedRect(x, y - 2.7, 3.5, 3.5, 0.45, 0.45, "S");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text("in", x + 0.75, y + 0.2);
}

function drawContactRow(
  doc: Doc,
  items: {
    icon: "phone" | "email" | "location" | "linkedin";
    text: string;
    url?: string;
  }[],
  startX: number,
  y: number,
  colGap: number
) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(F.contact);
  setText(doc, C.white);

  let x = startX;
  for (const item of items) {
    const iconX = x;
    const iconY = y;
    if (item.icon === "phone") drawIconPhone(doc, iconX, iconY, C.white);
    if (item.icon === "email") drawIconEmail(doc, iconX, iconY, C.white);
    if (item.icon === "location") drawIconLocation(doc, iconX, iconY, C.white);
    if (item.icon === "linkedin") drawIconLinkedIn(doc, iconX, iconY, C.white);

    const textX = iconX + 5.2;
    setText(doc, C.white);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.contact);
    doc.text(item.text, textX, y);

    if (item.url) {
      const tw = doc.getTextWidth(item.text);
      doc.link(iconX, y - 3, 5.2 + tw, 4.5, { url: item.url });
    }

    x += colGap;
  }
}

function renderHeader(doc: Doc, data: PortfolioData) {
  const p = data.personalDetails;
  drawGradientHeader(doc);

  let y = 18;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(F.name);
  setText(doc, C.white);
  doc.text(p.name.toUpperCase(), M, y);

  y += 8;
  doc.setFontSize(F.role);
  doc.text(p.title.toUpperCase().replace(/·/g, "-"), M, y);

  y += 6.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(F.tagline);
  const { years } = getTotalExperience();
  const tag = `${formatYearsPlus(
    years
  )} shipping production UIs with Vue, Svelte & React — mentoring teams and delivering user-first solutions.`;
  for (const line of wrap(doc, tag, PAGE_W - M - 48).slice(0, 2)) {
    doc.text(line, M, y);
    y += LH.meta;
  }

  // Contact grid: 2 rows × 2 columns with icons, evenly aligned
  y += 5;
  const col1 = M;
  const col2 = M + 78;

  drawContactRow(
    doc,
    [
      {
        icon: "phone",
        text: p.phone,
        url: `tel:${p.phone.replace(/\s/g, "")}`,
      },
      {
        icon: "email",
        text: p.email,
        url: `mailto:${p.email}`,
      },
    ],
    col1,
    y,
    col2 - col1
  );

  y += 5.5;
  drawContactRow(
    doc,
    [
      {
        icon: "location",
        text: shortLocation(p.address),
      },
      {
        icon: "linkedin",
        text: linkedInHandle(p.socialLinks.linkedin),
        url: p.socialLinks.linkedin,
      },
    ],
    col1,
    y,
    col2 - col1
  );
}

function renderExperience(doc: Doc, data: PortfolioData, cursor: Cursor) {
  cursor.y = heading(doc, "Work Experience", LEFT_X, cursor.y, C.navy);

  for (const exp of data.experiences) {
    need(doc, cursor, 22);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.jobTitle);
    setText(doc, C.navy);
    const titles = wrap(doc, exp.title, LEFT_W - 36);
    doc.text(titles[0], LEFT_X, cursor.y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.meta);
    setText(doc, C.muted);
    doc.text(exp.period, META_RIGHT_X, cursor.y, { align: "right" });
    cursor.y += 5.2;

    if (titles[1]) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(F.jobTitle);
      setText(doc, C.navy);
      doc.text(titles[1], LEFT_X, cursor.y);
      cursor.y += 4.6;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.company);
    setText(doc, C.teal);
    doc.text(exp.company, LEFT_X, cursor.y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.meta);
    setText(doc, C.muted);
    doc.text(shortLocation(exp.location), META_RIGHT_X, cursor.y, {
      align: "right",
    });
    cursor.y += 5.8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.label);
    setText(doc, C.ink);
    doc.text("Responsibilities:", LEFT_X, cursor.y);
    cursor.y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.body);
    setText(doc, C.ink);

    for (const item of exp.highlights) {
      const lines = wrap(doc, item, LEFT_W - 5);
      need(doc, cursor, lines.length * LH.body + 2);
      doc.text("•", LEFT_X, cursor.y);
      doc.text(lines[0], LEFT_X + 3.5, cursor.y);
      cursor.y += LH.body;
      for (let i = 1; i < lines.length; i++) {
        need(doc, cursor, LH.body + 1);
        doc.text(lines[i], LEFT_X + 3.5, cursor.y);
        cursor.y += LH.body;
      }
      cursor.y += 0.8;
    }
    cursor.y += 3.5;
  }
}

function renderProjects(doc: Doc, data: PortfolioData, cursor: Cursor) {
  need(doc, cursor, 16);
  cursor.y = heading(doc, "Projects", LEFT_X, cursor.y+1, C.teal);

  const projects = data.projects.filter((p) => !/coffic/i.test(p.title));

  for (const project of projects) {
    need(doc, cursor, 26);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.jobTitle);
    setText(doc, C.navy);
    doc.text(project.title, LEFT_X, cursor.y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.meta);
    setText(doc, C.muted);
    doc.text(project.role, META_RIGHT_X, cursor.y, { align: "right" });
    cursor.y += 5.2;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.company);
    setText(doc, C.teal);
    doc.text(project.technologies.slice(0, 4).join(" · "), LEFT_X, cursor.y);
    cursor.y += 5.2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.body);
    setText(doc, C.ink);

    for (const item of [project.description, project.impact]) {
      const lines = wrap(doc, item, LEFT_W - 5);
      need(doc, cursor, lines.length * LH.body + 2);
      doc.text("•", LEFT_X, cursor.y);
      doc.text(lines[0], LEFT_X + 3.5, cursor.y);
      cursor.y += LH.body;
      for (let i = 1; i < lines.length; i++) {
        need(doc, cursor, LH.body + 1);
        doc.text(lines[i], LEFT_X + 3.5, cursor.y);
        cursor.y += LH.body;
      }
      cursor.y += 0.6;
    }

    cursor.y += 1.2;
    need(doc, cursor, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.label);
    setText(doc, C.teal);
    const prefix = "My Role: ";
    doc.text(prefix, LEFT_X, cursor.y);
    doc.setFont("helvetica", "normal");
    const roleLines = wrap(
      doc,
      `${project.role}. ${project.impact}`,
      LEFT_W - doc.getTextWidth(prefix)
    );
    doc.text(roleLines[0], LEFT_X + doc.getTextWidth(prefix), cursor.y);
    cursor.y += LH.body;
    for (let i = 1; i < roleLines.length; i++) {
      need(doc, cursor, LH.body + 1);
      setText(doc, C.teal);
      doc.text(roleLines[i], LEFT_X, cursor.y);
      cursor.y += LH.body;
    }
    cursor.y += 4;
  }
}

function renderSidebarPage1(doc: Doc, data: PortfolioData) {
  doc.setPage(1);
  let y = HEADER_H + 10;

  y = heading(doc, "My Skills", RIGHT_X, y, C.navy);
  const skills = data.skills.flatMap((g) => g.items.map((i) => i.name));
  y = skillPills(doc, skills, RIGHT_X, y, RIGHT_W);
  y += 4;

  y = heading(doc, "Professional Summary", RIGHT_X, y + 4, C.navy);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(F.sidebar);
  setText(doc, C.ink);
  for (const line of wrap(
    doc,
    withDynamicYears(data.personalDetails.summary),
    RIGHT_W
  )) {
    doc.text(line, RIGHT_X, y);
    y += LH.body;
  }
  y += 4;

  y = heading(doc, "Languages", RIGHT_X, y + 4, C.navy);
  const langs = data.personalDetails.languages.map((lang) => {
    const l = lang.toLowerCase();
    if (l.includes("marathi") || l.includes("native")) {
      return { name: "Marathi", level: 5 };
    }
    if (l.includes("hindi")) return { name: "Hindi", level: 5 };
    if (l.includes("english")) return { name: "English", level: 4 };
    return { name: lang, level: 4 };
  });
  y = languageDots(doc, langs, RIGHT_X, y);
  y += 3;

  y = heading(doc, "Certificates", RIGHT_X, y + 4, C.navy);
  for (const cert of data.certifications) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.company);
    setText(doc, C.teal);
    for (const line of wrap(doc, cert.name, RIGHT_W)) {
      doc.text(line, RIGHT_X, y);
      y += LH.meta;
    }
    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.meta);
    setText(doc, C.muted);
    doc.text(`by ${cert.issuer}`, RIGHT_X, y);
    y += LH.meta;
    doc.text(cert.date, RIGHT_X, y);
    y += 6;
  }

  return y;
}

function renderSidebarEducation(
  doc: Doc,
  data: PortfolioData,
  startY = PAGE_TOP
) {
  let y = heading(doc, "Education", RIGHT_X, startY, C.teal);

  for (const edu of data.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.company);
    setText(doc, C.navy);
    for (const line of wrap(doc, edu.degree, RIGHT_W)) {
      doc.text(line, RIGHT_X, y);
      y += LH.body;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(F.label);
    setText(doc, C.teal);
    for (const line of wrap(doc, edu.school, RIGHT_W)) {
      doc.text(line, RIGHT_X, y);
      y += LH.meta;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(F.meta);
    setText(doc, C.muted);
    doc.text(edu.period, RIGHT_X, y);
    y += LH.meta;
    doc.text(shortLocation(data.personalDetails.address), RIGHT_X, y);
    y += 4;

    setText(doc, C.ink);
    doc.setFontSize(F.sidebar);
    for (const line of wrap(doc, edu.description, RIGHT_W)) {
      doc.text(line, RIGHT_X, y);
      y += LH.tight;
    }
    y += 5;
  }

  y += 1;
  y = heading(doc, "Availability", RIGHT_X, y + 4, C.teal);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(F.sidebar);
  setText(doc, C.teal);
  for (const line of wrap(doc, data.personalDetails.availability, RIGHT_W)) {
    doc.text(line, RIGHT_X, y);
    y += LH.body;
  }
}

async function buildCV(data: PortfolioData) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  doc.setProperties({
    title: `${data.personalDetails.name} — CV`,
    author: data.personalDetails.name,
    subject: "Curriculum Vitae",
    keywords: "frontend, vue, svelte, react, cv",
    creator: "Portfolio CV Generator",
  });

  renderHeader(doc, data);

  const photo = await loadProfileImage(data.personalDetails.profileImage);
  if (photo) {
    await circularPhoto(doc, photo, PAGE_W - 24, HEADER_H / 2 + 0.5, 17);
  }

  drawSidebar(doc);

  const cursor: Cursor = { y: HEADER_H + 10, page: 1 };
  renderExperience(doc, data, cursor);
  renderProjects(doc, data, cursor);

  const page1End = renderSidebarPage1(doc, data);

  const pages = doc.getNumberOfPages();
  if (pages === 1) {
    if (page1End < PAGE_H - 60) {
      renderSidebarEducation(doc, data, page1End + 2);
    } else {
      newPage(doc, cursor);
      renderSidebarEducation(doc, data);
    }
  } else {
    for (let p = 2; p <= pages; p++) {
      doc.setPage(p);
      drawSidebar(doc, true);
      if (p === 2) renderSidebarEducation(doc, data, PAGE_TOP);
    }
  }

  return doc;
}

/** Download an HR-ready CV PDF matching the two-column reference layout. */
export async function downloadCV(data: PortfolioData = portfolioData) {
  const doc = await buildCV(data);
  doc.save(`${data.personalDetails.name.replace(/\s+/g, "_")}_CV.pdf`);
}
