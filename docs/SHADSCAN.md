# Shadscan Workflow

Internet Outage Atlas is an Astro editorial site. It does not use a shadcn component registry, so Shadscan's source score is not a release target. The applicable check is the separate rendered overflow scan against the deployed archive.

Run:

```bash
bun run audit:shadscan:ui
```

The command checks the deployed root page at Shadscan's fixed 320 x 820 and 1440 x 1000 viewports. Add current archive, timeline, and About routes with repeated `--route /path` arguments when those route names change or expand.

This check does not validate source citations, incident accuracy, canonical tags, structured data, dark mode, CloudCannon editing, keyboard behavior, or Core Web Vitals.

Keep these repository checks authoritative:

```bash
bun run check
bun run build
```

Do not add shadcn, React components, generic cards, or a score threshold to make an editorial Astro site resemble the scanner's reference architecture.

## Current status

The command is pinned and documented. It was not executed in the GitHub-only editing environment because the local shell could not resolve external hosts. No Shadscan pass is claimed.
