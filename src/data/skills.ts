import type { Skill } from "@/types";

export const skills: Skill[] = [
  // AI & LLMs
  { name: "ChatGPT", category: "AI & LLMs" },
  { name: "Google Gemini", category: "AI & LLMs" },
  { name: "Claude", category: "AI & LLMs" },
  { name: "Claude Code", category: "AI & LLMs" },
  { name: "Perplexity AI", category: "AI & LLMs" },
  { name: "Prompt Engineering", category: "AI & LLMs" },
  { name: "AI Image Generation", category: "AI & LLMs" },
  { name: "AI Video Generation", category: "AI & LLMs" },
  { name: "AI Website Development", category: "AI & LLMs" },

  // Shopify
  { name: "Shopify Store Management", category: "Shopify" },
  { name: "Shopify Theme Customization", category: "Shopify" },
  { name: "Shopify Product Management", category: "Shopify" },

  // Design & Media
  { name: "Canva", category: "Design & Media" },
  { name: "CapCut", category: "Design & Media" },
  { name: "PicLumen", category: "Design & Media" },
  { name: "Flow", category: "Design & Media" },

  // Marketing & Analytics
  { name: "Google Analytics", category: "Marketing & Analytics" },
  { name: "Google Ads", category: "Marketing & Analytics" },
  { name: "SEO Basics", category: "Marketing & Analytics" },

  // Development
  { name: "n8n (Basic)", category: "Development" },

  // Soft Skills
  { name: "Client Research", category: "Soft Skills" },
  { name: "Technical Troubleshooting", category: "Soft Skills" },
  { name: "Professional Communication", category: "Soft Skills" },
  { name: "Responsive Design Understanding", category: "Soft Skills" },
];

export const skillCategories = [
  "AI & LLMs",
  "Shopify",
  "Design & Media",
  "Marketing & Analytics",
  "Development",
  "Soft Skills",
] as const;
