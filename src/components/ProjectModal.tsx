import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full md:max-w-2xl max-h-[88vh] overflow-y-auto bg-panel border border-line2 rounded-t-md md:rounded-md"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 bg-panel border-b border-line px-8 py-6 flex items-start justify-between">
              <div>
                <p className="field-label text-amber mb-2">{project.code}</p>
                <h3 id="project-modal-title" className="text-2xl font-display font-semibold text-paper">
                  {project.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="text-muted hover:text-paper p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-8 py-6 space-y-6">
              <p className="text-paper/90 leading-relaxed">{project.description}</p>

              {project.focus && (
                <div className="border-l-2 border-amber pl-4">
                  <p className="field-label mb-1">focus</p>
                  <p className="text-muted text-sm leading-relaxed">{project.focus}</p>
                </div>
              )}

              <div>
                <p className="field-label mb-3">key points</p>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-amber shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="field-label mb-3">stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted border border-line2 rounded-sm px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line flex items-center gap-6">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-amber-soft transition-colors"
                  >
                    <GithubIcon size={16} /> Repository
                  </a>
                ) : (
                  <span className="text-sm text-faint">Repository — coming soon</span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-amber-soft transition-colors"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-sm text-faint">Live demo — coming soon</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
