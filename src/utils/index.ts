/** Career start used for total experience across UI, CV, and SEO copy. */
export const CAREER_START = "2018-12-01";

export function calculateYearsAndMonths(
  startDate: string | number | Date,
  endDate: string | number | Date = new Date()
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return { years: 0, months: 0 };
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Account for day-of-month so tenure/age doesn't round up early
  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

export function formatYearsAndMonths(years: number, months: number): string {
  const yearLabel = years > 0 ? `${years} yr${years === 1 ? "" : "s"}` : "";
  const monthLabel = months > 0 ? `${months} mo${months === 1 ? "" : "s"}` : "";
  return [yearLabel, monthLabel].filter(Boolean).join(" ") || "0 mos";
}

/** Marketing-style tenure label, e.g. "7+ years". */
export function formatYearsPlus(years: number): string {
  return `${Math.max(years, 0)}+ years`;
}

export function getTotalExperience(asOf: Date = new Date()) {
  return calculateYearsAndMonths(CAREER_START, asOf);
}

/** Duration for a single "Mon YYYY - Mon YYYY|Present" period. */
export function getPeriodDuration(period: string, asOf: Date = new Date()): string {
  const { start, end, isPresent } = parsePeriodRange(period);
  if (!start) return "";
  const { years, months } = calculateYearsAndMonths(
    start,
    isPresent || !end ? asOf : end
  );
  return formatYearsAndMonths(years, months);
}

/** ISO-ish value for <time datetime>, e.g. "2023-07/2026-07" or "2023-07/..". */
export function toPeriodDateTime(period: string): string {
  const { start, end, isPresent } = parsePeriodRange(period);
  const fmt = (d: Date | null) =>
    d
      ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
      : "";
  const startIso = fmt(start);
  if (!startIso) return period;
  if (isPresent) return `${startIso}/..`;
  const endIso = fmt(end);
  return endIso ? `${startIso}/${endIso}` : startIso;
}

/** Replace `{years}+ years` / `__YEARS_PLUS__` placeholders with live tenure. */
export function withDynamicYears(text: string, asOf: Date = new Date()): string {
  const { years } = getTotalExperience(asOf);
  return text
    .replaceAll("__YEARS_PLUS__", String(years))
    .replace(/\{years\}\+?\s*years?/gi, formatYearsPlus(years))
    .replace(/\b\d+\+\s*years?\b/gi, formatYearsPlus(years));
}

/** Parse "Jul 2023" / "June 2023" style month-year strings from period fields. */
export function parseMonthYear(
  value: string,
  boundary: "start" | "end" = "start"
): Date | null {
  const trimmed = value.trim();
  if (!trimmed || trimmed.toLowerCase() === "present") {
    return null;
  }

  // Year-only ranges used in education, e.g. "2015"
  if (/^\d{4}$/.test(trimmed)) {
    const year = Number(trimmed);
    return boundary === "end"
      ? new Date(year, 11, 31)
      : new Date(year, 0, 1);
  }

  const parsed = new Date(`${trimmed} 1`);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  // Inclusive month ranges: start at day 1, end at last day of that month
  if (boundary === "end") {
    return new Date(parsed.getFullYear(), parsed.getMonth() + 1, 0);
  }

  return parsed;
}

export function parsePeriodRange(period: string): {
  start: Date | null;
  end: Date | null;
  isPresent: boolean;
} {
  const [rawStart = "", rawEnd = ""] = period
    .split(/\s[-–—]\s/)
    .map((part) => part.trim());
  const isPresent = rawEnd.toLowerCase() === "present";

  return {
    start: parseMonthYear(rawStart, "start"),
    end: isPresent ? new Date() : parseMonthYear(rawEnd, "end"),
    isPresent,
  };
}
