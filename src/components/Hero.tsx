import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container-page">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            <span className="field-label text-muted">
              status: building · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl font-semibold text-paper max-w-4xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-xl md:text-2xl text-amber-soft font-display">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-muted text-base md:text-lg leading-relaxed">
            {profile.tagline} — ML/CV developer building real-world AI systems,
            and a researcher exploring generative models beyond the classroom.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 bg-amber text-void font-medium px-5 py-3 rounded-sm hover:bg-amber-soft transition-colors"
            >
              View Projects
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("research")}
              className="inline-flex items-center gap-2 border border-line2 text-paper px-5 py-3 rounded-sm hover:border-amber hover:text-amber-soft transition-colors"
            >
              Research
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-paper transition-colors px-2 py-3"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-paper transition-colors px-2 py-3"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-muted hover:text-paper transition-colors px-2 py-3"
            >
              <Mail size={18} /> Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
