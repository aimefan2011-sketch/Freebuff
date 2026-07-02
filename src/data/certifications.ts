import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    issueDate: "2024",
    description:
      "Demonstrates proficiency in Google Analytics, including setting up tracking, creating reports, analyzing data, and deriving actionable insights for business growth.",
    image: "/images/cert-ga.svg",
    credentialUrl: "https://skillshop.exceedlms.com/",
  },
  {
    title: "Google Ads Video Certification",
    issuer: "Google",
    issueDate: "2024",
    description:
      "Validates expertise in creating and optimizing video advertising campaigns on Google Ads, including YouTube advertising strategies and measurement.",
    image: "/images/cert-ads.svg",
    credentialUrl: "https://skillshop.exceedlms.com/",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    issueDate: "2024",
    description:
      "Covers foundational concepts of generative AI, including large language models, prompt engineering, responsible AI practices, and real-world applications.",
    image: "/images/cert-genai.svg",
    credentialUrl: "https://cloud.google.com/learn/training",
  },
];
