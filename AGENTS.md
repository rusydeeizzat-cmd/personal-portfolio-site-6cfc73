# Architecture

This is Rusydee Izzat’s portfolio, built with React 19 and TanStack Start file routes. Vite runs the Tailwind, Netlify adapter, TanStack Start and React plugins. The Content Collections scaffolding remains available but is not used by the portfolio or enabled in Vite.

## Key directories

- `src/routes/`: homepage, about, projects, gallery, résumé and contact. `__root.tsx` owns document metadata, header, footer and the main landmark.
- `src/components/Portfolio.tsx`: shared responsive image helper, documented career project data and project cards.
- `src/components/SiteHeader.tsx`: shared header and footer.
- `src/components/ContactForm.tsx`: Netlify Forms submission with pending, success and retry states.
- `src/lib/site.ts`: real identity and metadata helper.
- `src/styles.css`: warm paper, olive and charcoal editorial design, responsive layouts and reduced motion rules.
- `public/img/`: portrait extracted from the supplied PDF and four rendered portfolio pages.
- `public/documents/`: original résumé and experience portfolio PDFs.
- `public/contact.html`: static Netlify Forms registration with fields matching the React form.

## Conventions and decisions

Use typed router Links, route-specific pageMeta calls and descriptive image alternative text. The route tree is generated during the platform build; do not hand-edit it. Keep browser APIs in event handlers or effects so server rendering remains safe. Use the shared OptimizedImage component for responsive Netlify Image CDN URLs, eager load only the hero, and preserve lazy loading elsewhere.

Content reflects the uploaded documents. Do not invent accomplishments, formal management titles or social accounts. ByteDance team monitoring was an assigned responsibility. Tesla Q4 2025 rankings are attributed to Tesla internal data. The ten-day coordination plan shown in the original portfolio is proposed, not a historical result.

The gallery uses a native modal dialog for focus containment and Escape support, with arrow-key navigation and focus restoration. Its previews are actual supplied portfolio pages rather than fabricated project imagery.

Form submissions must remain URL encoded and target `/contact.html` so the SSR catch-all does not intercept them. Keep form-name, name, email, message and bot-field synchronized with static registration. Do not report success for unsuccessful requests or unprocessed registration HTML. The Netlify Forms feature marker is enabled. No database, authentication or secret is required.

Use `netlify dev --port 8889` for local development when needed. During platform editing runs, do not execute build, dev, test or typecheck commands; automatic validation handles these after edits. Review edited sources instead.
