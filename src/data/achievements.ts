export interface Achievement {
  id: string;
  title: string;
  detail: string;
  period: string;
}

export const achievements: Achievement[] = [
  {
    id: "tcs-hackathon",
    title: "Runner-Up — TCS Technology Day Hackathon",
    detail: "Competitive placement in TCS's Technology Day Hackathon.",
    period: "",
  },
  {
    id: "csi-active-member",
    title: "Active Technical Member, Computer Society of India (CSI)",
    detail: "Ongoing technical contribution to CSI's programs and events.",
    period: "Since August 2024",
  },
];
