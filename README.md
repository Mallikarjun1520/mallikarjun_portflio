# Mallikarjun Madishetty — Portfolio

A production-ready personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Editing content

All content lives in `src/data/` as plain TypeScript objects — you should never need to touch component/UI code to update information.

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, tagline, summary, education, contact links |
| `src/data/skills.ts` | Skill categories and tags |
| `src/data/projects.ts` | All project cards, including ImpactLedger |
| `src/data/research.ts` | The Research section (Neural Weaves) |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/achievements.ts` | Achievement badges |
| `src/data/articles.ts` | Articles — currently empty; add objects here and the section switches from its empty state to a card grid automatically |

### Adding a project

Open `src/data/projects.ts` and add a new object to the `projects` array following the existing shape (`code`, `name`, `tagline`, `stack`, `description`, `highlights`, `metrics`, optional `github`/`demo`). It will automatically render as a new card with a details modal — no other file needs to change.

### Filling in ImpactLedger's links

`ImpactLedger` in `projects.ts` has `placeholder: true` and no `github`/`demo` values. Once you have a repo or live demo, just add those fields and remove `placeholder: true`.

### Adding an article

Add an object to the `articles` array in `src/data/articles.ts`:

```ts
{
  id: "unique-id",
  title: "Article title",
  date: "2026-01-01",
  description: "One or two sentence summary.",
  tags: ["computer-vision", "research"],
  url: "https://...",
  platform: "Medium",
}
```

## Design notes

- Color, type, and spacing tokens are defined in `tailwind.config.js` — change the `amber` / `teal` / `void` colors there to re-theme the whole site.
- Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) are loaded via Google Fonts in `index.html`.
- The subtle grid background and reveal-on-scroll animations respect `prefers-reduced-motion`.

## Deployment

The build output in `dist/` after `npm run build` is a static site — deploy it to Vercel, Netlify, GitHub Pages, or any static host.
