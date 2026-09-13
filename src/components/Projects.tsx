import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading
          index="03"
          title="Projects"
          description="Four shipped systems and one in active development — logged roughly in build order."
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={i % 2 === 1}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
