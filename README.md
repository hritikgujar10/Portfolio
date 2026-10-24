# Hritik Gujar · Digital Marketer & Designer

Personal portfolio: a scroll-driven journey through space and a marketing funnel (Awareness → Consideration → Conversion), with case studies, projects, experience, skills and certifications.

Live: https://hritik-gujar.vercel.app

## Stack

- One `index.html` with inline CSS and JavaScript
- three.js (loaded on large screens only), GSAP ScrollTrigger and Lenis from CDNs
- A lightweight 2D canvas version on phones and for reduced motion
- `?view=simple` shows a plain, recruiter-friendly page

## Run locally

No build step: open `index.html` in a browser. Images, certificates and `Hritik-Gujar-Portfolio.pdf` sit next to it.

`pdf/portfolio-deck.html` is the source of the portfolio PDF (print it to PDF at 1456 × 819). It is kept in the repo but not deployed (see `.vercelignore`).

## Deploy

Pushing to `main` deploys to Vercel as a static site (`vercel.json`: no install or build, served from the root).
