import { ArrowUpRight, PenLine } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section id="articles" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading index="07" title="Articles" />

        {articles.length === 0 ? (
          <Reveal>
            <div className="border border-dashed border-line2 rounded-sm p-12 md:p-16 text-center">
              <PenLine className="mx-auto text-faint mb-5" size={26} strokeWidth={1.5} />
              <p className="text-xl font-display text-paper">Ideas are being written.</p>
              <p className="mt-2 text-muted text-sm max-w-sm mx-auto">
                Technical writing on computer vision and applied ML is on the way —
                this section will fill in as pieces are published.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.06}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full border border-line2 rounded-sm p-7 hover:border-amber/60 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="field-label text-faint">{article.date}</span>
                    <span className="field-label text-faint">{article.platform}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-paper flex items-start gap-2">
                    {article.title}
                    <ArrowUpRight size={16} className="text-amber shrink-0 mt-1" />
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{article.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-faint border border-line rounded-sm px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
