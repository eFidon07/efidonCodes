import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
import type { SkillProps } from "../app.types";

export const footerlinks = [
  {
    Label: LuGithub,
    text: "Github",
    url: "https://github.com/eFidon07",
  },
  {
    Label: LuLinkedin,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/emmanuel-ifidon-37319a261/",
  },
  {
    Label: LuTwitter,
    text: "Twitter",
    url: "https://x.com/eFidon_codes",
  },
];

export const menuLinks: { label: string; path: string }[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Work",
    path: "/work",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const mySkills: SkillProps[] = [
  { name: "Frontend development", proficiencyLevel: "45%" },
  { name: "backend development", proficiencyLevel: "80%" },
  { name: "mobile development", proficiencyLevel: "60%" },
];

export const techNTools: SkillProps[] = [
  { name: "HTML", proficiencyLevel: "80%" },
  { name: "CSS", proficiencyLevel: "70%" },
  { name: "Javascript", proficiencyLevel: "85%" },
  { name: "React", proficiencyLevel: "80%" },
  { name: "Node.js", proficiencyLevel: "80%" },
  { name: "MongoDB", proficiencyLevel: "60%" },
  { name: "PostgreSQL/Prisma", proficiencyLevel: "40%" },
  { name: "JWT", proficiencyLevel: "80%" },
  { name: "React native", proficiencyLevel: "70%" },
  { name: "Git", proficiencyLevel: "90%" },
  { name: "Github", proficiencyLevel: "80%" },
];
