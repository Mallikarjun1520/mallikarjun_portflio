import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading
          index="02"
          title="Skills"
          description="Organized by the role each tool plays in a project — from language to deployment."
        />

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06} className="bg-void p-8">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-lg font-display font-semibold text-paper">{group.label}</h3>
                <span className="field-label text-faint">{group.note}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted border border-line2 rounded-sm px-3 py-1.5 hover:border-amber hover:text-amber-soft transition-colors"
                  >
                    {skill}
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
