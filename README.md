# Hritik Gujar · Portfolio

A fast, animated single-page portfolio for a UI/UX Product Designer, built with **React + Vite** and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy (free options)

- **Vercel / Netlify** — import the repo; framework auto-detected as Vite. Build command `npm run build`, output dir `dist`.
- **GitHub Pages** — push `/dist` (or use an action). For a project page, add `base: '/<repo>/'` to `vite.config.js`.

## Editing content

Everything lives in one file: [`src/data/content.js`](src/data/content.js) — profile, stats, skills, experience, projects, education, certifications. Change text there and every section updates.

### ⚠️ Fill these in
The resume didn't include full social URLs, so these are placeholders in `content.js`:

```js
linkedin: 'https://www.linkedin.com/',   // → your real LinkedIn URL
github:   'https://github.com/',         // → your real GitHub URL
```

## Structure

```
src/
  data/content.js       ← all editable content
  components/           ← Hero, About, Skills, Experience, Projects, Education, Contact…
  index.css             ← full design system (colors, type, layout)
  App.jsx               ← page composition
```

Accent color, fonts, and spacing are all CSS variables at the top of `src/index.css`.
