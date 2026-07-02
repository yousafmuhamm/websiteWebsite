# West Pine Strategies — Website

Marketing site for West Pine Strategies, a family-owned furnished-accommodation and
luxury property management company in Calgary. Built with Vite, React and React Router.
Design direction: quiet-luxury hospitality (serif display type, thin uppercase UI,
cream/pine/gold palette), modeled on sites like theowo.london.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, services, featured properties, owners pitch, relocation, testimonials |
| `/properties` | West Pine Properties — furnished accommodations + full portfolio |
| `/partners` | West Pine Partners — property management |
| `/about` | Story, values, testimonials |
| `/contact` | Contact info + validated inquiry form |

## What still needs real content

- **Photography.** Every image is a labeled `PlaceholderImage` block. Each label says
  what photo belongs there (e.g. "Property Photo — Rosedale Residence Exterior").
  Swap them for real photos without touching layout.
- **Form backend.** The contact form validates client-side and shows a success message
  only. See the `TODO` in `src/pages/Contact.jsx` to wire it to an email service.
- **Social links.** Footer and contact-page social anchors are intentional placeholders
  until the profiles exist.

## Where things live

- `src/styles/global.css` — design tokens (colors, type, spacing) and shared layout classes
- `src/components/` — header, footer, buttons, placeholder images, carousel, feature grid
- `src/data/` — property listings, testimonials, feature blurbs (edit copy here)
- `src/pages/` — one file per route

`PROGRESS.md` tracks the original build checklist; `git log` has one commit per milestone.
