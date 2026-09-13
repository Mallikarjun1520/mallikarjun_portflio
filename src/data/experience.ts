export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "csi-technical-team",
    role: "Technical Team Member",
    org: "Computer Society of India (CSI)",
    period: "Aug 2024 – Present",
    points: [
      "Optimized and managed digital infrastructure for 1 hackathon and 2 workshops supporting 200+ participants",
      "Leading the Neural Weaves generative AI research initiative",
      "Coordinating a 4-member research team under CSI's innovation program",
    ],
  },
];
