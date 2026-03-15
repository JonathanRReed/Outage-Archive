# Internet Outage Atlas

Internet Outage Atlas is an editorial Astro site documenting landmark internet failures through a broadsheet-inspired visual system, with custom Atlas sections, structured editorial content, dark mode, and production SEO/social metadata.

## What This Project Includes

- A broadsheet-style homepage experience
- Dedicated Atlas pages for timeline, archives, and about content
- Custom section components under `src/components/atlas/`
- CloudCannon-friendly content structures and editable regions
- Social preview metadata, structured data, sitemap generation, and robots rules

## Stack

- Astro 6
- CloudCannon editable regions
- MDX
- Lightning CSS
- Sharp / Astro image pipeline
- Static sitemap generation

## Project Structure

```text
.
├── public/
│   ├── images/                 # Social preview image, logo, public assets
│   └── robots.txt              # Crawl policy
├── src/
│   ├── components/atlas/       # Custom Atlas sections and shared shells
│   ├── content/pages/index.md  # Homepage content model
│   ├── data/seo.json           # Site-wide SEO metadata
│   ├── layouts/                # Base layout and page shells
│   ├── styles/atlas/_atlas.css # Shared Atlas styling
│   └── component-docs/         # Starter library docs and builder assets
├── astro.config.mjs            # Astro config, site URL, sitemap integration
├── package.json                # Scripts and dependencies
└── README.md
```

## Local Development

Install dependencies and start the dev server:

```bash
bun install
bun run dev
```

The site runs locally at `http://localhost:4321`.

## Available Commands

| Command                      | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| `bun run dev`                | Start the local Astro development server               |
| `bun run build`              | Build the production site with component docs disabled |
| `bun run build:with-library` | Build the site with the component library included     |
| `bun run preview`            | Preview the production build locally                   |
| `bun run lint`               | Run JavaScript, CSS, and YAML linting                  |
| `bun run format`             | Check formatting with Prettier                         |
| `bun run check`              | Run lint + format checks                               |
| `bun run check:fix`          | Run autofixable lint and formatting tasks              |

## Content Editing Model

The homepage content is driven by `src/content/pages/index.md`, where Atlas sections are modeled as structured content blocks. That lets editors update headlines, copy, incidents, methodology, and supporting archival material without editing component logic.

Each Atlas section follows the starter's component + CloudCannon structure pattern:

```text
src/components/atlas/<section>/
├── SectionName.astro
├── <section>.cloudcannon.inputs.yml
└── <section>.cloudcannon.structure-value.yml
```

## Key Files You Will Most Likely Update

- `src/content/pages/index.md`
  - Homepage editorial content and section data

- `src/data/seo.json`
  - Site name, description, production URL, title format, default preview image

- `src/layouts/BaseLayout.astro`
  - Canonical tags, Open Graph tags, Twitter tags, and first-paint theme bootstrap

- `src/components/utils/StructuredData.astro`
  - Organization structured data output

- `public/images/outage-image.png`
  - Default social/search preview image

- `public/images/logo.svg`
  - Organization/site logo used in metadata

- `public/favicon.svg`
  - Browser/favicon asset

- `public/robots.txt`
  - Crawl policy for search engines and AI agents

- `astro.config.mjs`
  - `site` configuration, sitemap integration, aliases, and build settings

## Deployment Notes

- Set `PUBLIC_SITE_URL` to your production domain when building or deploying.
- This project currently uses `https://outage-archive.jonathanrreed.com` in `src/data/seo.json`.
- The Astro config falls back to `https://outage-archive.jonathanrreed.com` in non-dev builds if `PUBLIC_SITE_URL` is missing.
- The production build generates `sitemap-index.xml`.
- `public/robots.txt` should stay aligned with the live domain and sitemap URL.
- Social/search preview changes can take time to refresh because platforms cache metadata.

## Reuse or Rebrand Checklist

If you are reusing, forking, or redeploying this site, update these first:

- Site name, description, and title format in `src/data/seo.json`
- Production URL in `src/data/seo.json`
- `PUBLIC_SITE_URL` in your hosting/deployment environment
- Default preview image at `public/images/outage-image.png`
- Logo and favicon in `public/images/logo.svg` and `public/favicon.svg`
- Crawl policy and sitemap URL in `public/robots.txt`
- Homepage editorial content in `src/content/pages/index.md`
- Any author names, colophon content, credits, or outbound links across the site

## Validation Notes

- Linting is available via `bun run lint`
- Production build is available via `bun run build`
- There is currently no dedicated `typecheck` script in `package.json`
- There are currently no configured automated tests for `bun test`

## License

MIT
