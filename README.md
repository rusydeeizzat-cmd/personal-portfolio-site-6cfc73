# Rusydee Izzat — Personal Portfolio

A personal portfolio for Muhammad Rusydee Izzat Bin Faisal, showcasing EV retail, commercial operations, quality assurance and customer experience. Content is drawn from the supplied résumé and experience portfolio.

The site includes a homepage, about page, work showcase with detailed case studies, filterable image gallery with an accessible image viewer, résumé page with the original PDF, and contact page with LinkedIn, email, telephone and a Netlify Forms contact form.

Built with React 19, TypeScript, TanStack Start, Vite, Tailwind CSS and Lucide icons. Images use Netlify Image CDN with responsive WebP variants and lazy loading. The portrait was extracted from the supplied portfolio; gallery document images are rendered from that original PDF.

## Local development

Use Node 22.13+ or Node 24, install dependencies with `pnpm install`, then run `netlify dev --port 8889`. Netlify CLI provides image CDN emulation and proxies the Vite application. Contact submission processing occurs on a deployed Netlify site.

## Content

Shared identity and metadata live in `src/lib/site.ts`. Project content lives in `src/components/Portfolio.tsx`; career content in `src/routes/resume.tsx`. Edit `src/routes/gallery.tsx` to add gallery images. Original PDF downloads live in `public/documents/`, image assets in `public/img/`, and global design styles in `src/styles.css`.

Netlify deploys generate the route tree and validate the application. The contact form posts to the static registration file `public/contact.html`, with matching field names. Form notifications can be configured in the site's Netlify Forms dashboard.
