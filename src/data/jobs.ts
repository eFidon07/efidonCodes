import { WorkExperienceProps } from "../app.types";

export const jobs: WorkExperienceProps[] = [
  {
    company: {
      name: "Innvesio",
      logo: "/images/innvesio-logo.svg",
    },
    description:
      "Responsible for designing and maintaining scalable backend systems, developing RESTful APIs, and managing databases like MongoDB. Tasks include implementing authentication, security measures, and performance optimizations to ensure seamless integration with frontend applications. Work involves using technologies like Node.js and Express, collaborating with frontend developers, handling deployments, and continuously improving backend architecture through debugging and code optimization.",
    role: ["Full-stack (backend-focused) developer", "Lead backend developer"],
    techUsed: [
      { category: "Backend", technologies: ["Node.js", "Express"] },
      {
        category: "Databases",
        technologies: ["MongoDB"],
      },
      { category: "Authentication", technologies: ["JWT", "OAuth"] },
      {
        category: "Frontend",
        technologies: ["React.js"],
      },
      { category: "Version Control", technologies: ["Git", "GitHub"] },
    ],
    startYear: {
      month: "March",
      year: 2023,
    },
    endYear: {
      month: "November",
      year: 2024,
    },
  },
];
