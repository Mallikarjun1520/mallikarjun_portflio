import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-faint">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">built with react · vite · tailwind</p>
      </div>
    </footer>
  );
}
