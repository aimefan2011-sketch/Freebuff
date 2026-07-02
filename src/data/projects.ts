import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation",
    category: "AI",
    overview:
      "Designed and implemented AI-powered workflows to streamline e-commerce operations and content creation processes.",
    problem:
      "Manual product management and content creation were time-consuming and prone to errors, limiting scalability.",
    solution:
      "Leveraged AI tools including ChatGPT, Claude, and Gemini to automate product descriptions, generate marketing copy, and optimize workflows.",
    technologies: [
      "ChatGPT",
      "Claude",
      "Google Gemini",
      "n8n",
      "Canva",
      "Shopify",
    ],
    features: [
      "Automated product description generation",
      "AI-powered content creation pipeline",
      "Workflow optimization for e-commerce operations",
      "Multi-platform AI integration",
    ],
    challenges: [
      "Ensuring consistent brand voice across AI-generated content",
      "Integrating multiple AI tools into a cohesive workflow",
    ],
    results: [
      "Reduced content creation time by 60%",
      "Maintained consistent quality across 1600+ product listings",
      "Scalable workflow adaptable to new projects",
    ],
  },
  {
    id: "shopify-store-optimization",
    title: "Shopify Store Optimization",
    category: "Shopify",
    overview:
      "Comprehensive Shopify store management and optimization for Benfox Digital Agency, handling 1600+ products.",
    problem:
      "Large product inventory needed efficient management, consistent theming, and optimized user experience.",
    solution:
      "Implemented systematic product management, customized themes, and optimized store performance.",
    technologies: [
      "Shopify",
      "Liquid",
      "HTML/CSS",
      "JavaScript",
      "Canva",
    ],
    features: [
      "Bulk product upload and management system",
      "Custom theme modifications and improvements",
      "Enhanced product page layouts",
      "Optimized navigation and filtering",
    ],
    challenges: [
      "Managing consistent data across 1600+ products",
      "Balancing customization with Shopify platform constraints",
    ],
    results: [
      "Successfully managed and optimized 1600+ products",
      "Improved store navigation and user experience",
      "Streamlined product management workflows",
    ],
  },
  {
    id: "ai-marketing-content",
    title: "AI Marketing Content Generation",
    category: "AI",
    overview:
      "Created compelling marketing assets using AI tools, including banners, social media content, and product visuals.",
    problem:
      "High demand for marketing content required faster turnaround without sacrificing quality.",
    solution:
      "Utilized AI image generation, video creation tools, and prompt engineering to produce professional marketing assets.",
    technologies: [
      "ChatGPT",
      "Canva",
      "CapCut",
      "PicLumen",
      "Flow",
      "Google Gemini",
    ],
    features: [
      "AI-generated banners and marketing visuals",
      "Video content creation and editing",
      "AI-powered copywriting",
      "Multi-platform content adaptation",
    ],
    challenges: [
      "Achieving brand-consistent AI-generated visuals",
      "Maintaining creative quality with AI tools",
    ],
    results: [
      "Produced high-quality marketing content efficiently",
      "Reduced content production time significantly",
      "Delivered consistent brand messaging across channels",
    ],
  },
  {
    id: "client-research-system",
    title: "Client Research & Outreach System",
    category: "Strategy",
    overview:
      "Developed a systematic client research and outreach process to identify and engage potential business opportunities.",
    problem:
      "Unstructured client acquisition process led to missed opportunities and inefficient lead generation.",
    solution:
      "Built a structured research framework leveraging AI tools for market analysis and client identification.",
    technologies: [
      "Perplexity AI",
      "Google Gemini",
      "LinkedIn",
      "Google Sheets",
    ],
    features: [
      "Systematic client research methodology",
      "AI-powered market analysis",
      "Targeted outreach strategies",
      "Lead qualification framework",
    ],
    challenges: [
      "Identifying high-quality leads from vast market data",
      "Personalizing outreach at scale",
    ],
    results: [
      "Improved lead qualification accuracy",
      "Structured and repeatable client acquisition process",
      "Contributed to agency growth",
    ],
  },
  {
    id: "ai-website-development",
    title: "AI-Powered Website Development",
    category: "AI",
    overview:
      "Built modern websites using AI-assisted development tools, combining AI efficiency with human creativity.",
    problem:
      "Traditional website development was time-intensive and required significant manual coding.",
    solution:
      "Leveraged AI coding tools and prompt engineering to rapidly develop and deploy websites.",
    technologies: [
      "Claude Code",
      "ChatGPT",
      "Next.js",
      "Tailwind CSS",
      "Shopify",
    ],
    features: [
      "AI-assisted code generation and optimization",
      "Rapid prototyping and iteration",
      "Responsive and modern designs",
      "Integration with e-commerce platforms",
    ],
    challenges: [
      "Ensuring code quality from AI-generated outputs",
      "Balancing AI assistance with manual refinement",
    ],
    results: [
      "Faster development turnaround times",
      "High-quality, production-ready websites",
      "Efficient integration of AI and manual development",
    ],
  },
  {
    id: "technical-support-excellence",
    title: "Technical Support & Troubleshooting",
    category: "Strategy",
    overview:
      "Provided comprehensive technical support and troubleshooting for Shopify stores and digital platforms.",
    problem:
      "Technical issues were disrupting store operations and affecting user experience.",
    solution:
      "Diagnosed and resolved technical issues systematically, implementing preventive measures.",
    technologies: [
      "Shopify",
      "Liquid",
      "HTML/CSS",
      "JavaScript",
      "Browser DevTools",
    ],
    features: [
      "Systematic issue diagnosis and resolution",
      "Theme and plugin conflict resolution",
      "Performance optimization",
      "Preventive maintenance protocols",
    ],
    challenges: [
      "Debugging complex theme and plugin interactions",
      "Resolving issues without disrupting live stores",
    ],
    results: [
      "Reduced store downtime significantly",
      "Improved overall store reliability",
      "Built preventive maintenance processes",
    ],
  },
];

export const projectCategories = ["All", "AI", "Shopify", "Strategy"] as const;
