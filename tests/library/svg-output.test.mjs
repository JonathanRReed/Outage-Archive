import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the library main-nav example emits the SVG logo without a raster alternative", async () => {
  const html = await readFile(
    new URL("../../dist/component-docs/components/navigation/main-nav/index.html", import.meta.url),
    "utf8"
  );
  const logoPictures = [...html.matchAll(/<picture\b[^>]*>([\s\S]*?)<\/picture>/g)]
    .map((match) => match[1])
    .filter((picture) => /src="[^\"]*logo\.[^\"]*\.svg"/.test(picture));

  assert.ok(logoPictures.length > 0, "the main-nav logo must render");
  for (const picture of logoPictures) {
    assert.doesNotMatch(picture, /image\/webp/);
    assert.match(picture, /alt="Logo"/);
  }

  const source = logoPictures[0].match(/src="(\/_astro\/logo\.[^\"]*\.svg)"/)[1];
  const svg = await readFile(new URL(`../../dist${source}`, import.meta.url), "utf8");

  assert.match(svg, /<svg\b/);
});
