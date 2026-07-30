import { withDynamicYears } from "../utils/index";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  role: string;
  description: string;
  impact: string;
  technologies: string[];
  link?: string;
}

interface PersonalDetails {
  name: string;
  title: string;
  summary: string;
  dob: string;
  email: string;
  phone: string;
  address: string;
  maritalStatus: string;
  languages: string[];
  availability: string;
  socialLinks: {
    github: string;
    linkedin: string;
    codeSandbox: string;
  };
  profileImage: string;
}

/** Site-level SEO constants used by meta tags, sitemap, and JSON-LD. */
export const siteSeo = {
  siteUrl: "https://dnyaneshwar-kadam-portfolio.onrender.com",
  title: "Dnyaneshwar Kadam — Senior Frontend Developer (Vue, Svelte, React)",
  /** Use getSiteDescription() for live experience years. */
  description:
    "Senior Frontend Developer with {years}+ years building production web apps. Expert in Vue, Svelte, and React, with REST/GraphQL, cloud, and mentoring experience. Based in Pune, open to remote roles.",
  keywords:
    "Senior Frontend Developer, Vue.js Developer, Svelte Developer, React Developer, TypeScript, JavaScript, GraphQL, REST APIs, AWS, Pune, Remote Frontend Engineer, Dnyaneshwar Kadam",
  locale: "en_IN",
  themeColor: "#4f46e5",
} as const;

interface SkillItem {
  name: string;
  detail: string;
}

interface SkillCategory {
  category: string;
  focus: string;
  items: SkillItem[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
}

export interface PortfolioData {
  personalDetails: PersonalDetails;
  certifications: Certification[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personalDetails: {
    name: "Dnyaneshwar Kadam",
    title: "Senior Frontend Developer · Vue · Svelte · React",
    summary:
      "Senior Frontend Developer with {years}+ years building production web apps for enterprise and product teams. Strong in Vue, Svelte, and React, with hands-on experience across REST/GraphQL APIs, cloud services, and mentoring engineers.",
    dob: "06 July, 1993",
    email: "kadamdnyanesh248@gmail.com",
    phone: "+91 9561116995",
    address: "Hadapsar, Pune, Maharashtra, India",
    maritalStatus: "Married",
    languages: ["English", "Hindi", "Marathi (Native)"],
    availability: "Open to Remote & Hybrid Roles · Full-time Opportunities",
    socialLinks: {
      github: "https://github.com/kadamdnyanesh",
      linkedin: "https://www.linkedin.com/in/dnyaneshwar-kadam-b36713a0",
      codeSandbox: "https://codesandbox.io/u/kadamdnyanesh248",
    },
    profileImage:
      "https://avatars.githubusercontent.com/u/174183693?s=400&u=9a6dcdd1f4d5158149675d86e1785df58b5f4157&v=4",
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "December 2023",
      credentialId: "BFRDE1VDQNBE129G",
      logo: "https://my-documents-1993.s3.ap-south-1.amazonaws.com/AWS+Certified+Cloud+Practitioner.png",
    },
    {
      name: "Generative AI Certification",
      issuer: "Genpact",
      date: "November 2024",
      credentialId: "GENPACT-AI-2024",
      logo: "https://my-documents-1993.s3.ap-south-1.amazonaws.com/Generative+AI+2024.png",
    },
  ],
  experiences: [
    {
      title: "Senior Application Developer (Assistant Manager)",
      company: "Genpact",
      period: "Jul 2023 - Present",
      location: "Gurugram, India · Remote",
      highlights: [
        "Own end-to-end frontend delivery for internal enterprise applications used across business teams.",
        "Build and maintain UI features in Vue, Svelte, and Astro with a focus on performance, accessibility, and maintainable component design.",
        "Mentor junior developers through code reviews, pairing, and shared frontend standards.",
        "Partner with product, design, and backend teams to ship reliable releases on agile timelines.",
      ],
      skills: ["Vue.js", "Svelte", "Astro", "TypeScript", "REST APIs", "AWS"],
    },
    {
      title: "Application Developer",
      company: "Genpact",
      period: "Sep 2021 - Jun 2023",
      location: "Delhi, India",
      highlights: [
        "Developed and supported full-stack features for business-critical internal tools.",
        "Integrated frontend clients with REST and GraphQL services; improved reliability of data-heavy workflows.",
        "Collaborated with cross-functional stakeholders to translate requirements into shipped UI.",
        "Contributed to reusable component patterns that reduced duplication across modules.",
      ],
      skills: ["Vue.js", "Svelte", "Astro", "GraphQL", "Node.js"],
    },
    {
      title: "Frontend Developer",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Apr 2019 - Sep 2021",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Delivered customer-facing web and hybrid mobile interfaces for SaaS and booking products.",
        "Built responsive UIs in Vue and React with Bootstrap/Tailwind, integrating REST APIs and MongoDB-backed services.",
        "Owned feature implementation from wireframe to production for products such as Coffic and Assure ID.",
        "Worked closely with backend engineers to debug API contracts and improve release quality.",
      ],
      skills: ["Vue.js", "React", "Cordova", "MongoDB", "Bootstrap"],
    },
    {
      title: "Software Engineering Trainee",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Dec 2018 - Mar 2019",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Built foundational skills in React, JavaScript, and modern web development practices.",
        "Contributed UI fixes and small features on live projects under senior engineer guidance.",
        "Learned agile delivery, version control, and collaborative code review workflows.",
      ],
      skills: ["React", "JavaScript", "HTML/CSS"],
    },
  ],
  education: [
    {
      degree: "Master of Engineering — Mechanical Machine Design",
      school: "Savitribai Phule Pune University",
      period: "2015 – 2017",
      description:
        "CGPA 8.02. Published research work and presented at academic conferences while completing a full-time postgraduate program.",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Savitribai Phule Pune University",
      period: "2012 – 2015",
      description:
        "Active in student leadership: managed workshops with IIT Delhi & IIT Guwahati, presented research at an international science & technology conference, and participated in NSS and Earn & Learn programs.",
    },
  ],
  projects: [
    {
      title: "Master Data Management (MDM)",
      role: "Frontend Engineer",
      description:
        "Central platform to manage users and shared master data consumed by multiple dependent applications.",
      impact:
        "Built the Svelte UI, REST integrations, and AWS workflows that made master data easier to maintain across systems.",
      technologies: ["Svelte", "REST APIs", "AWS", "Tailwind CSS"],
    },
    {
      title: "Digital Content Locker (DCL)",
      role: "Frontend Engineer",
      description:
        "Secure file storage and sharing product (OneDrive-style) for enterprise document workflows.",
      impact:
        "Delivered Vue UI, GraphQL schema contributions, API integration, and email notification triggers on Azure Functions + Neo4j.",
      technologies: [
        "Vue.js",
        "GraphQL",
        "Neo4j",
        "Azure Functions",
        "Tailwind CSS",
      ],
    },
    {
      title: "Coffic — Co-working Cafes",
      role: "Frontend Developer",
      description:
        "India-focused co-working space booking platform spanning web and mobile clients.",
      impact:
        "Implemented booking UX, responsive layouts, and API integration for Vue web and Cordova mobile apps backed by MongoDB.",
      technologies: ["Vue.js", "Cordova", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "ABACUS Online",
      role: "Frontend Developer",
      description:
        "Online Abacus assessment platform enabling students to take timed tests digitally.",
      impact:
        "Developed the React test UI and API integrations used by students and instructors for online evaluations.",
      technologies: ["React", "MongoDB", "Bootstrap"],
    },
    {
      title: "Assure ID",
      role: "Frontend Developer",
      description:
        "Employee background verification portal for HR and compliance workflows.",
      impact:
        "Contributed Meteor.js UI features and production bug fixes that improved verification form reliability.",
      technologies: ["Meteor.js", "MongoDB", "Bootstrap"],
    },
  ],
  skills: [
    {
      category: "Frontend",
      focus: "UI frameworks and styling used across production apps.",
      items: [
        { name: "JavaScript / TypeScript", detail: "Primary language stack" },
        { name: "Vue.js", detail: "Strongest production framework" },
        { name: "Svelte", detail: "Modern internal platforms" },
        { name: "React", detail: "Product & assessment UIs" },
        { name: "Astro", detail: "Multi-framework pages" },
        { name: "HTML / CSS", detail: "Responsive, accessible layouts" },
        { name: "Tailwind & Bootstrap", detail: "Fast, consistent styling" },
      ],
    },
    {
      category: "APIs & Data",
      focus: "Connecting UI to services and data stores.",
      items: [
        { name: "REST APIs", detail: "Integration & contract debugging" },
        { name: "GraphQL", detail: "Schema & client data fetching" },
        { name: "Node.js", detail: "Full-stack feature support" },
        { name: "MongoDB / SQL", detail: "Working with app data models" },
        { name: "Meteor.js", detail: "Legacy product maintenance" },
      ],
    },
    {
      category: "Delivery",
      focus: "Shipping reliably in team environments.",
      items: [
        { name: "AWS", detail: "Cloud Practitioner certified" },
        { name: "Azure Functions", detail: "Serverless workflows" },
        { name: "Git & CI/CD", detail: "Reviews and releases" },
        { name: "Agile / Scrum", detail: "Sprint-based delivery" },
        { name: "Mentoring", detail: "Code reviews & junior coaching" },
      ],
    },
  ],
};

/** Live summary with experience years calculated from CAREER_START. */
export function getPersonalSummary(asOf: Date = new Date()): string {
  return withDynamicYears(portfolioData.personalDetails.summary, asOf);
}

/** Live SEO / meta description with current experience years. */
export function getSiteDescription(asOf: Date = new Date()): string {
  return withDynamicYears(siteSeo.description, asOf);
}
