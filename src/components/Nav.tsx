import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "bg-void/95 backdrop-blur-md border-line py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-display font-semibold text-paper tracking-tight text-lg"
          aria-label="Go to home"
        >
          MM<span className="text-amber">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-7">
          {links.slice(1).map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="text-sm text-muted hover:text-paper transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden container-page pt-4 pb-6 bg-void">
          <ul className="flex flex-col gap-1 border-t border-line pt-4">
            {links.slice(1).map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  className="w-full text-left py-2.5 text-paper/90 text-base"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
