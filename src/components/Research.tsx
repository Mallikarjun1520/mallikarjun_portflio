import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { research, type ResearchItem } from "../data/research";

const fields: { key: keyof ResearchItem; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "methodology", label: "Methodology" },
  { key: "progress", label: "Current progress" },
  { key: "outcomes", label: "Outcomes" },
  { key: "futureWork", label: "Future work" },
];

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading
          index="04"
          title="Research"
          description="Ongoing applied research, not a publication record — tracked here as it develops."
        />

        <div className="space-y-10">
          {research.map((r) => (
            <Reveal key={r.id} className="border border-line">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 field-label text-teal-soft border border-teal/30 rounded-sm px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-soft animate-pulse" />
                    ongoing research
                  </span>
                  <span className="field-label text-faint">{r.program}</span>
                </div>

                <h3 className="text-3xl font-display font-semibold text-paper mb-4">{r.name}</h3>
                <p className="text-paper/90 leading-relaxed max-w-2xl">{r.overview}</p>

                <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-6 border-t border-line pt-8">
                  {fields.map((f) => (
                    <div key={String(f.key)}>
                      <p className="field-label text-amber mb-1.5">{f.label}</p>
                      <p className="text-sm text-muted leading-relaxed">{r[f.key] as string}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-line">
                  <p className="field-label text-amber mb-1.5">Team</p>
                  <p className="text-sm text-muted">{r.team}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
