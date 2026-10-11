# Panther AI Club Official Website

Built with [Next.js](https://nextjs.org) (App Router), exported as a static site and hosted on GitHub Pages. Content is edited in [Sanity](https://www.sanity.io).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

- `src/app/` — routes (each folder with a `page.jsx` is a page)
- `src/components/` — shared UI
- `src/lib/` — shared club info (contact, nav links, team)
- `src/sanity/` — content schemas and the Sanity client
- `public/` — images

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. To rebuild without a code change (for example after publishing content in Sanity), use **Run workflow** in the Actions tab.

The site is static: there is no server, so no API routes. Forms and sign-in have to talk to a hosted service from the browser.

## Content studio

The Sanity Studio is hosted by Sanity, not on this site. `/studio` redirects to it; the address is `STUDIO_URL` in `src/lib/site.js`.

```bash
npm run studio          # run the Studio locally at http://localhost:3333
npm run studio:deploy   # publish the Studio to <name>.sanity.studio
```

Both need `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` in `.env.local` (same values as the `NEXT_PUBLIC_SANITY_*` ones).
