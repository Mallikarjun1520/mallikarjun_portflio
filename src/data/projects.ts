export interface Project {
  id: string;
  code: string;
  name: string;
  tagline: string;
  stack: string[];
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  focus?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    id: "violence-detection",
    code: "case_01",
    name: "Violence Detection System",
    tagline: "Classifying violent vs. non-violent activity in real time",
    stack: ["Python", "OpenCV", "scikit-learn"],
    description:
      "An ML pipeline that flags violent activity from surveillance footage, built to support real-time alerting in public safety settings.",
    highlights: [
      "Trained on 1,000+ video frames using OpenCV optical flow for motion feature extraction",
      "Classified violent vs. non-violent activity with an SVM over HOG descriptors",
      "Reached ~85% classification accuracy",
      "Automated anomaly flagging for real-time alerts",
    ],
    metrics: [
      { label: "accuracy", value: "~85%" },
      { label: "frames processed", value: "1,000+" },
    ],
  },
  {
    id: "election-monitoring",
    code: "case_02",
    name: "Smart Election Monitoring System",
    tagline: "Live CCTV analysis for crowd and movement anomalies",
    stack: ["Python", "OpenCV"],
    description:
      "A real-time surveillance system built to process live CCTV feeds during elections, flagging unauthorized movement and crowd-level anomalies as they happen.",
    highlights: [
      "Processed live CCTV feeds at 15 fps",
      "Adaptive background subtraction and contour detection for movement analysis",
      "Detected unauthorized movement and crowd anomalies at 80%+ precision",
      "Fired alerts within 2 seconds of detection",
    ],
    metrics: [
      { label: "throughput", value: "15 fps" },
      { label: "precision", value: "80%+" },
      { label: "alert latency", value: "< 2s" },
    ],
  },
  {
    id: "bharath-247",
    code: "case_03",
    name: "Bharath 24/7",
    tagline: "News aggregation platform with automated categorization",
    stack: ["Python", "Web Scraping", "MongoDB"],
    description:
      "An automated pipeline that scrapes, categorizes, and stores news articles at scale, replacing manual curation with structured, queryable storage.",
    highlights: [
      "Automated scraping pipeline across 10+ distinct sources",
      "Dynamic topic categorization for incoming articles",
      "Accelerated data ingestion by 90% compared with manual curation",
      "MongoDB-based storage for 5,000+ articles with keyword-based retrieval",
    ],
    metrics: [
      { label: "sources", value: "10+" },
      { label: "articles stored", value: "5,000+" },
      { label: "faster ingestion", value: "90%" },
    ],
  },
  {
    id: "pochampally-ikat",
    code: "case_04",
    name: "AI-Based Pochampally Ikat Design Generation",
    tagline: "Fine-tuned SDXL for domain-specific textile pattern generation",
    stack: ["Python", "Stable Diffusion XL", "LoRA", "OpenCV"],
    description:
      "A generative pipeline fine-tuned on a curated Pochampally Ikat textile dataset, producing domain-specific patterns ready for textile production rather than generic image output.",
    highlights: [
      "Fine-tuned Stable Diffusion XL (SDXL) with LoRA on a curated Ikat dataset",
      "Automated image captioning for domain-specific training",
      "Custom OpenCV preprocessing: color quantization and denoising",
      "Grid-based pattern simplification to prepare designs for textile production",
    ],
    metrics: [],
  },
  {
    id: "impactledger",
    code: "case_05",
    name: "ImpactLedger",
    tagline: "AI-agent payment security & policy platform",
    stack: ["AI Agents", "Payment Security", "Policy Engine", "RBAC", "Transaction Monitoring", "Blockchain", "FastAPI"],
    description:
      "Policy-driven infrastructure for managing and securing payments made by AI agents. ImpactLedger lets organizations define spending policies, enforce transaction limits, monitor agent activity, and detect anomalous payment behavior before a transaction executes — combining agent governance, policy enforcement, transaction monitoring, and blockchain-based payment infrastructure into one system.",
    focus: "Making autonomous payments controllable, auditable, and safer for real-world organizations.",
    highlights: [
      "Policy engine for defining spending rules and transaction limits per agent",
      "Role-based access control (RBAC) over agent payment permissions",
      "Transaction monitoring with anomaly detection ahead of execution",
      "Blockchain-based payment infrastructure for auditability",
    ],
    metrics: [],
    featured: true,
    placeholder: true,
  },
];
