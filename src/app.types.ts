import { Icon } from "iconsax-react";

// Types
export type WorkExperienceProps = {
  role: string[];
  company: {
    name: string;
    logo?: string;
  };
  description: string;
  techUsed: { category: TechnologyCategories; technologies: string[] }[];
  startYear: ExperienceTime;
  endYear?: ExperienceTime | "present";
};

export type TechnologyCategories =
  | "Backend"
  | "Databases"
  | "Authentication"
  | "Cloud & DevOps"
  | "Frontend"
  | "Version Control";

export type ProjectLinkProps = {
  icon: Icon;
  label: string;
  url: string;
};

export type ProjectCollaboratorProps = {
  name: string;
  website: string;
};

export type ProjectCategory =
  | "frontend"
  | "backend"
  | "mobile-app"
  | "full-stack web"
  | "full-stack mobile";

// in-use Types
type ExperienceTime = {
  month: months;
  year: number;
};

type months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

// Interfaces
export interface ProjectProps {
  title: string;
  logo?: string;
  projectLink: string;
  coverImage: string;
  type: string;
  description: string;
  startDate: ExperienceTime;
  category: ProjectCategory;
  links?: ProjectLinkProps[];
}

export interface WorkProps extends Omit<ProjectProps, "links"> {
  collaborators?: ProjectCollaboratorProps[];
}

export interface InputProps {
  // Input
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  id?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string | undefined;
  onTextChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;

  // Label
  label: string;
}

export interface TextAreaProps
  extends Omit<InputProps, "type" | "onTextChange"> {
  onTextChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}
