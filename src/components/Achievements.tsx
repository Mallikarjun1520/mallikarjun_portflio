import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading index="06" title="Achievements" />

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <div className="h-full border border-line2 rounded-sm p-7 hover:border-amber/60 transition-colors">
                <Award className="text-amber mb-4" size={22} strokeWidth={1.75} />
                <h3 className="text-lg font-display font-semibold text-paper leading-snug">
                  {a.title}
                </h3>
                {a.detail && <p className="mt-2 text-sm text-muted leading-relaxed">{a.detail}</p>}
                {a.period && <p className="mt-4 field-label text-faint">{a.period}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
