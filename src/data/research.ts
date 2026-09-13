export interface ResearchItem {
  id: string;
  name: string;
  status: "ongoing";
  program: string;
  overview: string;
  problem: string;
  methodology: string;
  progress: string;
  team: string;
  outcomes: string;
  futureWork: string;
}

export const research: ResearchItem[] = [
  {
    id: "neural-weaves",
    name: "Neural Weaves",
    status: "ongoing",
    program: "Computer Society of India — Innovation Program",
    overview:
      "A generative AI research initiative exploring how generative models can be applied to domain-specific, culturally grounded design problems, led as part of CSI's innovation program.",
    problem:
      "Off-the-shelf generative models produce generic outputs that don't reflect the structure and constraints of specialized visual domains — this initiative investigates how to close that gap.",
    methodology:
      "Fine-tuning and adapting generative architectures on curated, domain-specific datasets, combined with classical computer vision preprocessing to keep outputs production-relevant.",
    progress:
      "Early-stage applied work is underway, including the Pochampally Ikat design generation project as a first testbed for the team's approach.",
    team: "4-member team, coordinated by Mallikarjun under CSI's innovation program",
    outcomes:
      "No published results yet — outcomes will be added here as the research matures.",
    futureWork:
      "Extending the approach to additional domain-specific datasets and formalizing an evaluation framework for generated output quality.",
  },
];
