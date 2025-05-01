interface Experience {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  description: string;
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
  description: string;
  technologies: string[];
  link: string;
}

interface PersonalDetails {
  name: string;
  title: string;
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

interface SkillCategory {
  category: string;
  items: string[];
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
    title: "Senior Frontend Developer (VueJS, Svelte, ReactJS)",
    dob: "06 July, 1993",
    email: "kadamdnyanesh248@gmail.com",
    phone: "+91 9561116995",
    address: "Hadapsar, Pune (MH), India - 411028",
    maritalStatus: "Married",
    languages: ["Marathi (Native)", "Hindi", "English"],
    availability: "Available for remote work",
    socialLinks: {
      github: "https://github.com/kadamdnyanesh",
      linkedin: "https://www.linkedin.com/in/dnyaneshwar-kadam-b36713a0",
      codeSandbox: "https://codesandbox.io/u/kadamdnyanesh248",
    },
    profileImage:
      "https://avatars.githubusercontent.com/u/174183693?v=4",
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "15 December 2023",
      credentialId: "BFRDE1VDQNBE129G",
      logo: "https://my-documents-1993.s3.ap-south-1.amazonaws.com/AWS+Certified+Cloud+Practitioner.png",
    },
    {
      name: "Generative AI Certification",
      issuer: "Genpact",
      date: "01 November 2024",
      credentialId: "GENPACT-AI-2024",
      logo: "https://my-documents-1993.s3.ap-south-1.amazonaws.com/Generative+AI+2024.png",
    },
  ],
  experiences: [
    {
      title: "Senior Application Developer (Assistant Manager)",
      company: "Genpact",
      period: "Jul 2023 - Present",
      duration: "2023-07-01",
      location: "Gurugram, Haryana, India · Remote",
      description:
        "Led development of in-house applications using modern technologies. Mentored junior developers and implemented best practices.",
      skills: ["Vue.js", "Svelte", "Astro.js"],
    },
    {
      title: "Application Developer",
      company: "Genpact",
      period: "Sep 2021 - June 2023",
      duration: "1 yr 10 mos",
      location: "Delhi, India",
      description:
        "Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "Svelte", "Astro.js"],
    },
    {
      title: "Frontend Developer",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Apr 2019 - Sep 2021",
      duration: "2 yrs 6 mos",
      location: "Pune, Maharashtra, India",
      description:
        "Developed and maintained frontend applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "React.js"],
    },
    {
      title: "Software Engineering Trainee",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Dec 2018 - Mar 2019",
      duration: "4 mos",
      location: "Pune, Maharashtra, India",
      description:
        "Trained in software development best practices and contributed to small-scale projects.",
      skills: ["React.js"],
    },
  ],
  education: [
    {
      degree: "Master of Engineering",
      school: "Pune University",
      period: "2015 - 2017",
      description:
        "Specialized in Mechanical Machine Design. Published multiple research papers and completed masters with CGPA 8.02",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Pune University",
      period: "2012 - 2015",
      description:
        "Activities and societies: 1) Event Manager of workshop taken by IIT Delhi & IIT Guwahati. 2) Research Paper Presented in International Conference on Science And Technology. 3) Effective Student of NSS and Earn and Learn.",
    },
  ],
  projects: [
    {
      title: "Master Data Management",
      description:
        "Data management of all users and other dependant applications master management. Built with Svelte, REST API, Tailwind CSS, and AWS Services. Role: UI development, API integration, AWS bucket management",
      technologies: ["Svelte", "REST API", "AWS", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "Digital Content Locker (DCL)",
      description:
        "A file storage and sharing system like OneDrive with secure access. Built with VueJS, Tailwind CSS, Neo4j, GraphQL, and Azure Functions. Role: UI development, API integration, GraphQL schema, Mail Trigger",
      technologies: ["VueJS", "GraphQL", "Neo4j", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "Coffic Co-working Cafes",
      description:
        "A co-working space booking platform in India. Web (VueJS, Tailwind) and Mobile (Cordova) with MongoDB. Role: Front-end development, UI building, API integration.",
      technologies: ["VueJS", "Cordova", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "ABACUS Online",
      description:
        "An online Abacus test platform for students. Built with ReactJS, Bootstrap, MongoDB. Role: UI development, API integration.",
      technologies: ["ReactJS", "MongoDB", "Bootstrap"],
      link: "https://github.com",
    },
    {
      title: "Assure ID",
      description:
        "An employee background verification portal. Built with MeteorJS, Bootstrap, MongoDB. Role: UI development, bug fixing.",
      technologies: ["MeteorJS", "MongoDB", "Bootstrap"],
      link: "https://github.com",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "VueJS",
        "ReactJS",
        "Svelte",
        "HTML/CSS",
        "JavaScript",
        "Tailwind/ Bootstrap",
        "AstroJS",
        "MeteorJS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "GraphQL", "SQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools",
      items: ["Git", "DevOps", "CI/CD", "Agile"],
    },
  ],
};
