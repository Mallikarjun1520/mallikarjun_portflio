import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading index="01" title="About" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="text-2xl md:text-3xl font-display leading-snug text-paper">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 space-y-6">
            <p className="text-muted leading-relaxed">
              I'm currently pursuing a B.Tech in Computer Science &amp; Engineering
              with a Data Science specialization at{" "}
              <span className="text-paper">{profile.education.institution}</span>,
              graduating in {profile.education.passingYear}. My work sits at the
              intersection of computer vision, applied machine learning, and
              software engineering — I'd rather ship a working pipeline than
              just read about one.
            </p>
            <p className="text-muted leading-relaxed">
              That's shown up as surveillance and safety-monitoring systems built
              on classical CV techniques, a generative pipeline fine-tuned for a
              specific textile domain, and a research initiative exploring where
              generative models still fall short. I'm also comfortable further
              up the stack — data pipelines, retrieval-augmented systems, and
              backend services with FastAPI.
            </p>
            <div className="pt-4 border-t border-line grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="field-label mb-1">institution</p>
                <p className="text-paper">{profile.education.institution}</p>
              </div>
              <div>
                <p className="field-label mb-1">program</p>
                <p className="text-paper">{profile.education.degree}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
