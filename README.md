# Sofía Puente Hernández — Portfolio

Personal portfolio site for Sofía Puente Hernández — a multilingual
professional working across diplomacy, sustainability, events, and
communications, with a uniquely multicultural, Latin American
perspective.

## Credits & attribution

This site's structure (React + Vite + Tailwind, component layout, build
tooling) is adapted from a template originally built by
[Silvia Arellano](https://github.com/SilviaAre95/silviaarellanor-de) for
her own Data Engineer portfolio. All content, copy, color system, and
several sections (Gallery, Initiatives, Beyond Work) are new for Sofía.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- React Icons + Lucide
- Framer Motion
- EmailJS (contact form)
- Deployed to GitHub Pages

## Getting started

```bash
npm install
cp .env.example .env   # then fill in real EmailJS credentials
npm run dev
```

## Project structure

```
src/
├── assets/css/index.css       # Tailwind layers + design tokens
├── components/
│   ├── IndustryBanner.jsx     # Scrolling sector banner
│   ├── Footer.jsx
│   ├── PlaceholderImage.jsx   # Stand-in tile used until real photos exist
│   └── ui/                    # Small shared primitives (card, badge, flip-words)
├── data/experience.js         # Experience + education timeline data
└── pages/
    ├── Header/                # Nav
    ├── Hero/                  # Intro + positioning statement
    ├── Skills/                # Languages, competencies, digital tools
    ├── Experience/            # Two-column timeline: experience + education
    ├── Gallery/                # NEW — curated photo strip + lightbox
    ├── Initiatives/           # (formerly "Projects") standout accomplishments
    ├── BeyondWork/            # NEW — film, writing, art
    ├── Contact/                # Contact form (EmailJS) + details
    └── About/                  # Full bio page
```

## Things that still need real assets

This reskin ships with clearly-labeled placeholders wherever a real asset
wasn't available. Nothing is broken without them — the site just shows a
placeholder tile until you drop the file in.

1. **Profile photo** — used in Hero and About. Save as
   `src/assets/images/sofia.jpg` (portrait, ~4:5 aspect ratio, at least
   900×1125px), then swap the `PlaceholderImage` for a real `<img>` in
   `src/pages/Hero/Hero.jsx` and `src/pages/About/About.jsx` (see the
   comments at the top of each file).
2. **Gallery photos** — five spots (Seoul/Dongguk, Vienna embassy, Tulum/
   Homa Kah, Vienna/Aguacate, CEU Environmental Front). Drop files into
   `public/gallery/` using the exact filenames listed in
   `public/gallery/README.md` — no code changes needed.
3. **Résumé PDF** — `public/resume-sofia-puente-hernandez.pdf` is
   currently a one-page placeholder. Replace it with the real résumé,
   keeping the same filename.
4. **EmailJS credentials** — `.env.example` is generic; copy it to `.env`
   and fill in real values from your own EmailJS dashboard
   (https://dashboard.emailjs.com/) for the contact form to actually send
   mail.

## Deploying to GitHub Pages

The site is built as a Vite project site under `/Sofia-Portfolio/`
(`base` in `vite.config.js`). Two ways to publish:

- **Manual:** `npm run deploy` (uses `gh-pages` to push `dist/` to the
  `gh-pages` branch), then point GitHub Pages at that branch in repo
  Settings → Pages.
- **Automatic:** the included `.github/workflows/deploy.yml` builds and
  publishes on every push to `main` via GitHub's native Pages action —
  just set Settings → Pages → Source to "GitHub Actions".

If a custom domain is added later, drop `base` back to `"/"` in
`vite.config.js` and add a `public/CNAME` file with the domain.
