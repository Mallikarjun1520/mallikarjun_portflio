import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";
import Reveal from "./Reveal";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, reverse, onOpen }: ProjectCardProps) {
  return (
    <Reveal className="border border-line">
      <div
        className={`grid md:grid-cols-12 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        <div
          className={`md:col-span-4 bg-panel border-line flex flex-col justify-between p-8 ${
            reverse ? "md:border-l" : "md:border-r"
          } [direction:ltr]`}
        >
          <div>
            <p className="field-label text-amber mb-3">{project.code}</p>
            <h3 className="text-2xl font-display font-semibold text-paper leading-tight">
              {project.name}
            </h3>
            <p className="mt-3 text-muted text-sm leading-relaxed">{project.tagline}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-faint">
            {project.stack.map((tech, i) => (
              <span key={tech}>
                {tech}
                {i < project.stack.length - 1 && <span className="text-line2 mx-2">/</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 p-8 flex flex-col justify-between [direction:ltr]">
          <div>
            <p className="text-paper/90 leading-relaxed">{project.description}</p>

            {project.metrics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-display font-semibold text-amber-soft">
                      {m.value}
                    </p>
                    <p className="field-label mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {project.placeholder && (
              <p className="mt-6 inline-block field-label text-teal-soft border border-teal/30 rounded-sm px-2.5 py-1">
                details in progress
              </p>
            )}
          </div>

          <div className="mt-8 flex items-center gap-5">
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-amber-soft transition-colors"
            >
              View details <ArrowUpRight size={14} />
            </button>
            <span className="text-line2">|</span>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-paper transition-colors"
              >
                <GithubIcon size={14} /> Repository
              </a>
            ) : (
              <span className="text-sm text-faint">Repository — coming soon</span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
