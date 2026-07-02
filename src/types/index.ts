export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "AI & LLMs"
  | "Shopify"
  | "Design & Media"
  | "Marketing & Analytics"
  | "Development"
  | "Soft Skills";

export interface Experience {
  title: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  image: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    phone: string;
    email: string;
  };
}
