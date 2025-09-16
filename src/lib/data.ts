// src/lib/data.ts

// --- TYPE DEFINITIONS ---
export interface Profile {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Job {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface Degree {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Publication {
  title: string;
  details: string;
  link: string | null;
}


// --- YOUR DATA ---
export const profile: Profile = {
  name: "Lissiyas Antony",
  title: "Associate Project Manager",
  contact: {
    email: "jvlissiyas@gmail.com",
    phone: "+91 9947896321",
    location: "Kollam, INDIA 691583"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/lissiyas/", // Add your LinkedIn
    github: "https://github.com/lissiyas", // Add your GitHub
  }
};

export const summary: string[] = [
  "Results-driven project management professional prepared to lead diverse teams towards achieving project goals.",
  "Known for consistently meeting deadlines, optimizing resources, and maintaining high standards of quality.",
  "Highly reliable team player with strong focus on collaboration and adaptability in dynamic environments.",
  "Expertise in project planning, risk assessment, and stakeholder communication."
];

export const skills: SkillCategory[] = [
  {
    category: "Data Analysis",
    items: ["Python", "SQL", "R", "Excel", "Tableau", "AWS QuickSight"]
  },
  {
    category: "Web Technologies",
    items: ["JavaScript", "HTML", "CSS", "Bootstrap", "REST APIs", "React.js", "Django", "FastAPI", "Flask"]
  },
  {
    category: "Databases",
    items: ["SQL Server", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Platforms",
    items: ["Figma", "Git", "AWS", "Jira"]
  },
  {
    category: "Project & Process Management",
    items: ["Scrum Framework", "Agile Methodologies", "Project Scheduling", "Sprint Planning", "Stakeholder Communication"]
  }
];

export const experience: Job[] = [
  {
    role: "Associate Project Manager",
    company: "Trivand Technologies",
    location: "Trivandrum",
    dates: "02/2025 - Current",
    responsibilities: [
      "Spearheaded projects as a project lead, aligning development strategies with business goals, sharing process knowledge, and coordinating team efforts to achieve project milestones effectively.",
      "Managed project planning, resource allocation, and risk management while leading daily scrums and sprint meetings to ensure project momentum, team alignment, and timely delivery within agile frameworks.",
      "Developed APIs using FastAPI, managed server deployments, and utilized Python libraries to create automated migration scripts, enhancing system integration, accessibility, and efficiency by minimizing manual processes."
    ]
  },
  {
    role: "Business Analyst",
    company: "Trivand Technologies",
    location: "Trivandrum",
    dates: "03/2024 - 02/2025",
    responsibilities: [
      "Acted as the primary liaison between internal teams and external stakeholders, fostering strong client relationships, engaging directly with international client as a business consultant, and organizing stakeholder meetings to capture requirements, clarify project scope, and discuss project progress and risks.",
      "Produced detailed project documentation-including Business Requirement Documents (BRD), Functional Specification Documents (FSD), Data Flow Diagrams (DFD), and User Flow Diagrams (UFD)-to facilitate cross-functional collaboration, support handoffs, and ensure alignment on business requirements and technical details.",
      "Conducted comprehensive product testing and gap analysis to identify performance improvements and feature enhancements, providing actionable recommendations to ensure high product quality and alignment with client expectations."
    ]
  },
  {
    role: "Junior Research Fellow",
    company: "Indian Institute of Technology Guwahati",
    location: "Guwahati",
    dates: "02/2023 - 12/2023",
    responsibilities: [
      "Designed and evaluated algorithms for security optimization, demonstrating problem-solving skills and a focus on data-driven performance assessment.",
      "Analyzed performance metrics and benchmarked results to improve decision-making based on data insights.",
      "Produced technical documentation on algorithm design and performance, translating complex information for diverse audiences.",
      "Leveraged simulation tools (Gem5, Benchmark Suites) to collect and analyze performance data for algorithm refinement.",
      "Developed and maintained robust web applications using Python Django and PostgreSQL, integrating RESTful APIs (leveraging Django REST Framework) for seamless data exchange.",
      "Successfully organized national-level conferences encouraging innovation."
    ]
  },
  {
    role: "Business Analyst",
    company: "Dayspring Technologies",
    location: "Bangalore",
    dates: "01/2022 - 01/2023",
    responsibilities: [
      "Increased signup conversions by 10% through Google Analytics analysis, driving plan selections and revenue growth.",
      "Leveraged PostgreSQL database administration expertise to assist application developers with schema design and SQL query tuning, ensuring optimal database performance and efficient development practices.",
      "Created reports and dashboards to track KPIs and extract actionable insights from warehouse data, providing data-driven support for business decision-making.",
      "Extracted actionable insights from large datasets using SQL and Excel, optimizing business processes and identifying growth opportunities.",
      "Translated complex business needs into detailed technical specifications, streamlining communication across teams and ensuring successful project outcomes.",
      "Participated in Scrum ceremonies (stand-ups, planning, retrospectives) to drive successful project outcomes within an Agile environment.",
      "Improved team productivity by implementing Kanban boards in Basecamp, visualizing workflows and identifying bottlenecks.",
      "Led cross-functional collaboration during A/B test design and post-experiment analysis, involving developers and utilizing Postman to test and debug API endpoints.",
      "Assisted in the design and implementation of database schemas for new applications, ensuring data integrity and efficient data access."
    ]
  }
];

export const education: Degree[] = [
  {
    degree: "Master Of Technology: Computer Science And Engineering",
    institution: "Rajiv Gandhi Institute Of Technology",
    location: "Kottayam",
    dates: "08/2019 - 07/2021"
  },
  {
    degree: "Bachelor Of Technology: Computer Science And Engineering",
    institution: "Younus College Of Engineering",
    location: "Kollam",
    dates: "08/2014 - 08/2018"
  }
];

export const certifications: Certification[] = [
  {
    name: "Google Data Analytics",
    issuer: "Google, Coursera"
  }
];

export const publications: Publication[] = [
  {
    title: "Securing Surveillance Data Using Incremental Cryptography",
    details: "SoCPaR 2021, Lecture Notes in Networks and Systems, vol 417. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-030-96302-6_20"
  },
  {
    title: "Exploring Trustable Paths in Network-on-Chip for Low-Slack Packets",
    details: "20th International SoC Conference (ISOCC 2023), South Korea",
    link: null
  }
];