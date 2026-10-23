# Internet Outage Atlas

An editorial site about major internet failures, with timelines, archives, and incident records. The newspaper-style interface supports light and dark themes. Astro builds the static site; CloudCannon exposes editable content blocks.

## Develop

Use Node.js 24 (see `.nvmrc`) and npm. `package-lock.json` is the canonical lockfile; use `npm ci` for reproducible installs rather than generating another package manager's lockfile.

```bash
npm ci
npm run dev
```

Open `http://localhost:4321`.

| Command                      | Use                                                |
| ---------------------------- | -------------------------------------------------- |
| `npm run build`              | Build without the starter component library        |
| `npm run build:with-library` | Include the component library                      |
| `npm run preview`            | Preview the build                                  |
| `npm run check`              | Run JavaScript, CSS, YAML and formatting checks    |
| `npm run check:fix`          | Apply available lint and formatting fixes          |
| `npm test`                   | Check the image pipeline and maintenance contracts |
| `npm run test:rendering`     | Build Markdown, MDX, named-slot and prop fixtures  |
| `npm run test:production`    | Inspect the existing production build in `dist/`   |
| `npm run test:library`       | Build and test the component library               |

The stack uses Astro 7, MDX, Lightning CSS, and Astro's Sharp image pipeline. There is no dedicated `typecheck` script. CI runs the checks and tests above plus full and production-only `npm audit`, without advisory exclusions. Run `npm run test:production` immediately after `npm run build`: `test:library` replaces `dist/` with a library-enabled build.

## Edit content

Homepage headlines, incidents, methodology, and archive material live in `src/content/pages/index.md`. Edit these structured blocks rather than component logic.

| Path                                        | Contents                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| `src/components/atlas/`                     | Atlas sections and shared layouts                            |
| `src/data/atlasIncidents.ts`                | Shared archive, timeline, map and incident case-file corpus  |
| `src/data/seo.json`                         | Site name, description, URL, title format, and preview image |
| `src/layouts/BaseLayout.astro`              | Canonical and social metadata, theme initialization          |
| `src/components/utils/StructuredData.astro` | Organization metadata                                        |
| `src/styles/atlas/_atlas.css`               | Shared Atlas styles                                          |
| `src/component-docs/`                       | Starter library documentation and builder assets             |
| `public/images/`, `public/favicon.ico`      | Images, logo, and favicon                                    |
| `public/robots.txt`                         | Crawler policy                                               |
| `astro.config.mjs`                          | Site URL, sitemap, aliases, and build settings               |

Each section has an Astro component plus `<section>.cloudcannon.inputs.yml` and `<section>.cloudcannon.structure-value.yml` files. CloudCannon's initial settings use `npm ci`, `npm run build`, and `dist/`; its existing postbuild hook runs Pagefind. This repository does not contain a deployment workflow.

## Deploy or reuse

The existing hosted CloudCannon build configuration is in `.cloudcannon/initial-site-settings.json`. This is an initial-settings file, not proof of the currently configured hosting provider or automatic deployment behavior. Before releasing, verify the connected production site's build settings and deploy the approved revision through its existing host; do not treat the CI workflow as a deployment step.

Set `PUBLIC_SITE_URL` to the production origin. Outside development, the Astro configuration falls back to `https://outage-archive.jonathanrreed.com`, also recorded in `src/data/seo.json`.

The build generates `sitemap-index.xml`. Keep its URL and the domain in `public/robots.txt` aligned with the deployment. Production output excludes the starter component-library routes, and the sitemap excludes component documentation, search and methodology pages.

For a new site, replace the metadata, homepage content, author credits, outbound links, preview image at `public/images/outage-image.png`, logo, and favicon. Social platforms may cache older previews after deployment.

## License

MIT.
