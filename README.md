# Internet Outage Atlas

Internet Outage Atlas is a one-page editorial record of landmark internet failures, presented as a broadsheet-inspired reference rather than a dashboard or SaaS product. The site was built from the CloudCannon Astro Component Starter and reshaped into a challenge entry focused on memorable design, polished CSS, and strong visual editing ergonomics.

## Concept

The page treats major outages as infrastructure events with patterns, causes, and blast radii that can be documented and understood. The experience mixes archival typography, restrained ornament, longform storytelling, and structured editorial data so the concept feels both designed and credible.

## Homepage Structure

- Hero broadsheet
- Featured outage timeline
- Incident archive
- Failure taxonomy
- Blast radius explainer
- Methodology and sources
- Atlas footer / colophon

## CloudCannon Editing Model

The homepage is driven by `src/content/pages/index.md`, where each atlas section is represented as a structured content block. Editors can update copy, reorder incidents, maintain supporting archive content, and revise methodology details without editing component code.

Each custom atlas section follows the starter's component pattern:

```text
src/components/atlas/<section>/
├── SectionName.astro
├── <section>.cloudcannon.inputs.yml
└── <section>.cloudcannon.structure-value.yml
```

## Key Files

```text
src/
├── components/atlas/         # Custom one-page Atlas sections
├── content/pages/index.md    # Homepage content model
├── styles/atlas/_atlas.css   # Shared atlas theme and interaction styles
├── layouts/                  # Page/layout shells
└── component-docs/           # Starter docs and visual builder
```

## Local Development

```bash
npm install
npm run dev
```

The site runs locally at `http://localhost:4321`.

## Available Scripts

| Command                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `npm run dev`                | Start the development server                |
| `npm run build`              | Build the production site                   |
| `npm run build:with-library` | Build the site with component docs included |
| `npm run lint`               | Run JavaScript, CSS, and YAML linting       |
| `npm run format`             | Check formatting with Prettier              |

## Submission Notes

- The repo keeps the starter component docs for reference and builder workflows.
- Set `PUBLIC_SITE_URL` when building or deploying so canonical metadata and structured data use the final production URL.

## License

MIT
