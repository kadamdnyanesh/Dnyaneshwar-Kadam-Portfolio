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

export interface PortfolioData {
  personalDetails: PersonalDetails;
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
      codeSandbox: "https://codesandbox.io/u/kadamdnyanesh248"
    },
    profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQEWEfXpscbc8g/profile-displayphoto-shrink_400_400/B4DZTrsmPeG4Ag-/0/1739121124763?e=1744848000&v=beta&t=sES1gcdp8tqCE4JB67lwlgAOuAh4uJ74LjtiFYZT3as"
  },
  experiences: [
    {
      title: "Senior Application Developer (Assistant Manager)",
      company: "Genpact",
      period: "Jul 2023 - Present",
      duration: "1 yr 8 mos",
      location: "Gurugram, Haryana, India · Remote",
      description: "Led development of in-house applications using modern technologies. Mentored junior developers and implemented best practices.",
      skills: ["Vue.js", "Svelte", "Astro.js"]
    },
    {
      title: "Application Developer",
      company: "Genpact",
      period: "Sep 2021 - Present",
      duration: "3 yrs 6 mos",
      location: "Delhi, India",
      description: "Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "Svelte", "Astro.js"]
    },
    {
      title: "Frontend Developer",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Apr 2019 - Sep 2021",
      duration: "2 yrs 6 mos",
      location: "Pune",
      description: "Developed and maintained frontend applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "React.js"]
    },
    {
      title: "Software Engineering Trainee",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Dec 2018 - Mar 2019",
      duration: "4 mos",
      location: "Pune, Maharashtra, India",
      description: "Trained in software development best practices and contributed to small-scale projects.",
      skills: ["React.js"]
    }
  ],
  education: [
    {
      degree: "Master of Engineering",
      school: "Pune University",
      period: "2015 - 2017",
      description: "Specialized in Mechanical Machine Design. Published multiple research papers and completed masters with CGPA 8.02"
    },
    {
      degree: "Bachelor of Engineering",
      school: "Pune University",
      period: "2012 - 2015",
      description: "Activities and societies: 1) Event Manager of workshop taken by IIT Delhi & IIT Guwahati. 2) Research Paper Presented in International Conference on Science And Technology. 3) Effective Student of NSS and Earn and Learn."
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features like user authentication, payment integration, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using Socket.IO. Features include task assignment, progress tracking, and team collaboration tools.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.IO"],
      link: "https://github.com"
    },
    {
      title: "AI Image Generator",
      description: "Created an AI-powered image generation tool using OpenAI's DALL-E API. Implemented features for style transfer and image manipulation.",
      technologies: ["Python", "Flask", "OpenAI API", "TensorFlow"],
      link: "https://github.com"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["VueJS", "ReactJS", "Svelte", "HTML/CSS", "JavaScript", "Tailwind/ Bootstrap", "AstroJS", "MeteorJS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "GraphQL", "SQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools",
      items: ["Git", "DevOps", "CI/CD", "Agile"]
    }
  ]
}; 