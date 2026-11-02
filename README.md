# Ajay Venkat A - Portfolio Website

React + Vite + TypeScript + Tailwind, with Three.js (@react-three/fiber, drei), Framer Motion, GSAP ScrollTrigger and Lenis smooth scrolling.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Pages (routes)

| Route | Content |
| --- | --- |
| `/` | 3D hero, achievements bento grid, deployments teaser |
| `/freelance` | Live Enterprise & Civic Deployments (stacked 3D cards) |
| `/projects` | 3D Project Vault with category filters |
| `/experience` | Scroll-lit internship timeline (GSAP) |
| `/skills` | 3D skill sphere, skill groups, certifications |
| `/contact` | Contact form, social links, resume hub |

## Edit your content

Everything (links, projects, internships, achievements, resumes) lives in `src/data.ts`.
Resume PDFs live in `public/resumes/`. Replace a file with the same name to update it.

## Deploy

- **Vercel**: import the repo, framework "Vite". `vercel.json` already handles page routes.
- **Netlify**: build command `npm run build`, publish directory `dist`. `public/_redirects` handles page routes.
