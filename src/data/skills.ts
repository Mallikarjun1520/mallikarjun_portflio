export interface SkillGroup {
  id: string;
  label: string;
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    note: "core programming",
    items: ["Python", "Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    note: "modeling & applied ai",
    items: [
      "scikit-learn",
      "OpenCV",
      "TensorFlow",
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "NLP",
      "RAG",
      "FastAPI",
    ],
  },
  {
    id: "data",
    label: "Data & Databases",
    note: "storage & analysis",
    items: ["Pandas", "NumPy", "SQL", "MongoDB"],
  },
  {
    id: "tools",
    label: "Tools / Ecosystem",
    note: "workflow",
    items: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "Diffusers", "Hugging Face"],
  },
];
