import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="container-page">
        <SectionHeading index="08" title="Contact" />

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="max-w-lg">
              <p className="text-2xl md:text-3xl font-display text-paper leading-snug">
                Open to ML/CV and software engineering internship roles —
                reach out if something here is relevant to what you're building.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-amber text-void font-medium px-6 py-4 rounded-sm hover:bg-amber-soft transition-colors shrink-0 self-start"
            >
              <Mail size={18} />
              {profile.email}
            </a>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-px bg-line border border-line">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-void p-6 flex items-center justify-between hover:bg-panel transition-colors"
            >
              <span className="flex items-center gap-3 text-paper">
                <GithubIcon size={18} /> {profile.githubHandle}
              </span>
              <ArrowUpRight size={16} className="text-muted group-hover:text-amber-soft transition-colors" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-void p-6 flex items-center justify-between hover:bg-panel transition-colors"
            >
              <span className="flex items-center gap-3 text-paper">
                <LinkedinIcon size={18} /> {profile.linkedinHandle}
              </span>
              <ArrowUpRight size={16} className="text-muted group-hover:text-amber-soft transition-colors" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
