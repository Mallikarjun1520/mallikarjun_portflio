import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading index="05" title="Experience" />

        <div className="relative pl-8 md:pl-10 border-l border-line2">
          {experience.map((exp) => (
            <Reveal key={exp.id} className="relative pb-2">
              <span className="absolute -left-[calc(2rem+5px)] md:-left-[calc(2.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-amber" />
              <p className="field-label text-faint mb-2">{exp.period}</p>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-paper">
                {exp.role}
              </h3>
              <p className="text-amber-soft mt-1 mb-4">{exp.org}</p>
              <ul className="space-y-2 max-w-2xl">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-amber shrink-0">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
