import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../../dist/", import.meta.url);
const origin = "https://outage-archive.jonathanrreed.com";
const readOutput = (file) => readFile(new URL(file, output), "utf8");
const incidentLinks = (html) =>
  new Set(
    [...html.matchAll(/<a\b[^>]*\bhref="\/incident\/([^/"?#]+)\//g)].map((match) => match[1])
  );

function readJsonScript(html, id) {
  const match = html.match(new RegExp(`<script[^>]*id="${id}"[^>]*>([\\s\\S]*?)</script>`));

  assert.ok(match, `missing serialized ${id}`);
  return JSON.parse(match[1]);
}

test("production keeps a single complete incident corpus across archives, timeline and map", async () => {
  const [archives, timeline, map, entries] = await Promise.all([
    readOutput("archives/index.html"),
    readOutput("timeline/index.html"),
    readOutput("map/index.html"),
    readdir(new URL("incident/", output), { withFileTypes: true }),
  ]);
  const slugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const archiveSlugs = [...archives.matchAll(/<details\b[^>]*\bdata-incident-slug="([^"]+)"/g)].map(
    (match) => match[1]
  );
  const chrono = readJsonScript(map, "mapChrono");
  const panels = readJsonScript(map, "mapPanelData");

  assert.ok(slugs.length >= 50, "the complete existing incident corpus must remain available");
  assert.deepEqual(archiveSlugs.sort(), slugs);
  assert.deepEqual([...incidentLinks(archives)].sort(), slugs);
  assert.deepEqual([...incidentLinks(timeline)].sort(), slugs);
  assert.deepEqual(chrono.map((incident) => incident.slug).sort(), slugs);
  assert.deepEqual(Object.keys(panels).sort(), slugs);
  assert.deepEqual(
    chrono.map((incident) => incident.date),
    chrono.map((incident) => incident.date).sort()
  );
  for (const slug of slugs) {
    const html = await readOutput(`incident/${slug}/index.html`);

    assert.match(html, new RegExp(`<link rel="canonical" href="${origin}/incident/${slug}/">`));
    assert.match(html, /<meta name="robots" content="index, follow">/);
    assert.match(html, /href="\/archives\//);
    assert.match(html, /href="\/timeline\//);
    assert.ok(panels[slug].title, `${slug}: map panel needs a title`);
    assert.ok(Number.isFinite(panels[slug].cx) && Number.isFinite(panels[slug].cy));
  }
});

test("production preserves filter controls and map playback hooks", async () => {
  const archives = await readOutput("archives/index.html");
  const map = await readOutput("map/index.html");

  for (const filter of ["year", "group", "severity", "sort", "search"]) {
    assert.ok(archives.includes(`data-archive-filter="${filter}"`));
  }
  assert.match(archives, /data-archive-reset/);
  assert.match(archives, /data-archive-empty/);
  assert.match(archives, /initArchiveFilters/);
  for (const id of ["atlasMap", "mapPanel", "mapPanelClose", "mapPlay", "mapScrubber"]) {
    assert.ok(map.includes(`id="${id}"`), `map needs ${id}`);
  }
  assert.match(map, /data-slug="/);
});

test("production metadata and sitemap stay on the canonical origin and exclude library routes", async () => {
  const files = await readdir(output, { recursive: true });
  const sitemap = await readOutput("sitemap-0.xml");
  const sitemapIndex = await readOutput("sitemap-index.xml");
  const robots = await readOutput("robots.txt");

  assert.ok(!files.some((file) => file.startsWith("component-docs/")));
  assert.ok(!files.some((file) => file.startsWith("__compatibility/")));
  assert.ok(sitemapIndex.includes(`${origin}/sitemap-0.xml`));
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`));
  assert.doesNotMatch(sitemap, /component-docs|\/search\/|\/methodology\/|localhost/);
  for (const route of ["", "archives/", "timeline/", "map/"]) {
    const html = await readOutput(`${route}index.html`);

    assert.ok(html.includes(`<link rel="canonical" href="${origin}/${route}">`));
    assert.ok(sitemap.includes(`<loc>${origin}/${route}</loc>`));
  }
});
