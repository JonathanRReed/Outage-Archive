# Internet Outage Atlas

An editorial site about major internet failures, with timelines, archives, and incident records. The newspaper-style interface supports light and dark themes. Astro builds the static site; CloudCannon exposes editable content blocks.

## Develop

```bash
bun install
bun run dev
```

Open `http://localhost:4321`.

| Command | Use |
| --- | --- |
| `bun run build` | Build without the starter component library |
| `bun run build:with-library` | Include the component library |
| `bun run preview` | Preview the build |
| `bun run lint` | Check JavaScript, CSS, and YAML |
| `bun run format` | Check Prettier formatting |
| `bun run check` | Run lint and formatting checks |
| `bun run check:fix` | Apply available fixes |

There is no dedicated `typecheck` script or configured `bun test` suite. The stack uses Astro 6, MDX, Lightning CSS, and Astro's Sharp image pipeline.

## Edit content

Homepage headlines, incidents, methodology, and archive material live in `src/content/pages/index.md`. Edit these structured blocks rather than component logic.

| Path | Contents |
| --- | --- |
| `src/components/atlas/` | Atlas sections and shared layouts |
| `src/data/seo.json` | Site name, description, URL, title format, and preview image |
| `src/layouts/BaseLayout.astro` | Canonical and social metadata, theme initialization |
| `src/components/utils/StructuredData.astro` | Organization metadata |
| `src/styles/atlas/_atlas.css` | Shared Atlas styles |
| `src/component-docs/` | Starter library documentation and builder assets |
| `public/images/`, `public/favicon.svg` | Images, logo, and favicon |
| `public/robots.txt` | Crawler policy |
| `astro.config.mjs` | Site URL, sitemap, aliases, and build settings |

Each section has an Astro component plus `<section>.cloudcannon.inputs.yml` and `<section>.cloudcannon.structure-value.yml` files.

## Deploy or reuse

Set `PUBLIC_SITE_URL` to the production origin. Outside development, the Astro configuration falls back to `https://outage-archive.jonathanrreed.com`, also recorded in `src/data/seo.json`.

The build generates `sitemap-index.xml`. Keep its URL and the domain in `public/robots.txt` aligned with the deployment.

For a new site, replace the metadata, homepage content, author credits, outbound links, preview image at `public/images/outage-image.png`, logo, and favicon. Social platforms may cache older previews after deployment.

## License

MIT.
