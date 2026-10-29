# OSUS — Tolbert Okoth Asumba

A React/Vite portfolio focused on quantitative engineering and data systems. The visual identity follows the supplied OSUS brand: charcoal, warm cream, muted red, and editorial serif typography.

## Development

Requires Node.js 22.12+ (or Node.js 20.19+) and npm.

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run lint
npm run build
npm run preview
```

Deploy `dist/` to a static host. Asset URLs assume deployment at the domain root. Set an absolute production `og:image` URL in `index.html` when the domain is known.

## Content and structure

- `src/data.js`: seven project case studies, four filter categories, experience, skills, and nine certification links.
- `src/App.jsx`: page composition and filter/menu state.
- `src/components/ProjectList.jsx`: categories, case studies, source links, evaluation notes, and disclosures.
- `src/components/ProjectVisual.jsx`: explanatory schematics, without simulated performance metrics.
- `src/components/ProjectList.css`: responsive project-specific styles.
- `src/components/Experience.jsx`: independent research, engineering projects, and confirmed freelance work, labelled separately.
- `src/App.css` and `src/index.css`: brand styling, responsive layout, focus states, and reduced-motion support.
- `public/brand/osus.jpg`: supplied brand artwork.
- `public/resume.pdf`: existing downloadable résumé; not rewritten during the portfolio repositioning.

The three leading projects cover Hurst/DFA hypothesis testing, walk-forward data/evaluation tooling, and OSUS feature/model inference. Software projects remain supporting examples of APIs, persistence, and data delivery.

Public-source buttons appear only for verified available repositories. Local OSUS and time-series research are labelled as local work and have engineering notes instead. Research results, model accuracy, runtime gains, and trading performance were not rerun or independently validated. Source-level limitations are stated in each case study. Client details and unprovided dates are omitted.

## Accessibility and interactions

Includes a skip link, semantic headings, named navigation, keyboard focus, text-based social links, filter counts and pressed state, live result announcements, native expandable notes, mobile menu state, and reduced-motion support. No external font request is required.
