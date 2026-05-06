export type ResourceCategory = "AI" | "GTM" | "Operations" | "Playbooks";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: "Template" | "Guide" | "Framework" | "Checklist" | "Prompt Library";
  readTime: string;
  comingSoon?: boolean;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "AI Workflow Audit Template",
    description:
      "Map your operational workflows to AI automation opportunities. Identify high-value targets for replacement before writing a line of code.",
    category: "AI",
    type: "Template",
    readTime: "15 min",
  },
  {
    id: "2",
    title: "Prompt Library: B2B Sales Intelligence",
    description:
      "60+ battle-tested prompts for lead research, outreach personalization, objection handling, and competitive positioning.",
    category: "AI",
    type: "Prompt Library",
    readTime: "30 min",
  },
  {
    id: "3",
    title: "Domain Expert Evaluation Framework",
    description:
      "How to assess whether a domain expert has the right combination of depth, customer access, and problem clarity to anchor a venture.",
    category: "Operations",
    type: "Framework",
    readTime: "20 min",
  },
  {
    id: "4",
    title: "Revenue-First Product Design",
    description:
      "The 5-step framework for designing AI products that tie directly to measurable ROI — before you build anything.",
    category: "AI",
    type: "Framework",
    readTime: "25 min",
  },
  {
    id: "5",
    title: "Niche Market Validation Checklist",
    description:
      "30 questions to validate whether a vertical niche can support a $1M–$5M ARR AI business. Built from real pattern recognition.",
    category: "GTM",
    type: "Checklist",
    readTime: "10 min",
  },
  {
    id: "6",
    title: "Small-Team GTM Playbook",
    description:
      "How to go from zero to first 10 paying customers with a team of 3–5. No growth hacks, no viral loops — just earned distribution.",
    category: "GTM",
    type: "Guide",
    readTime: "40 min",
  },
  {
    id: "7",
    title: "Venture Studio Cap Table Structuring",
    description:
      "How to structure equity for ventures built with co-founders, operational experts, and angel investors — and why it matters.",
    category: "Operations",
    type: "Framework",
    readTime: "20 min",
  },
  {
    id: "8",
    title: "AI SaaS Pricing Models",
    description:
      "Four proven pricing architectures for vertical AI products. Includes benchmarks, conversion data, and implementation guidance.",
    category: "GTM",
    type: "Guide",
    readTime: "25 min",
  },
  {
    id: "9",
    title: "Zero-to-One Startup Playbook",
    description:
      "The full Launch Dream methodology for taking a venture from idea to first revenue in under 12 months with a lean team.",
    category: "Playbooks",
    type: "Framework",
    readTime: "60 min",
  },
  {
    id: "10",
    title: "AI Engineer Hiring Rubric",
    description:
      "How to evaluate founding AI engineers: technical depth, product instincts, and the rare ability to ship production systems fast.",
    category: "Operations",
    type: "Checklist",
    readTime: "15 min",
  },
  {
    id: "11",
    title: "Government & Enterprise Buyer Psychology",
    description:
      "What large buyers actually care about, how they make decisions, and how to position AI products to win their budget quickly.",
    category: "GTM",
    type: "Guide",
    readTime: "35 min",
    comingSoon: true,
  },
  {
    id: "12",
    title: "Vertical AI Company Playbook",
    description:
      "End-to-end guide for building a deep, narrow, AI-native vertical business: from niche selection to profitable ARR.",
    category: "Playbooks",
    type: "Framework",
    readTime: "50 min",
    comingSoon: true,
  },
];
