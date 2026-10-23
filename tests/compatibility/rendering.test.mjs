import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { build } from "astro";

test("Markdown, MDX, named slots and forwarded props retain their rendered behavior", async () => {
  // Astro moves prerendered assets into outDir with rename, so keep both on one filesystem.
  const tempRoot = fileURLToPath(new URL("../../node_modules/.cache/", import.meta.url));

  await mkdir(tempRoot, { recursive: true });
  const output = await mkdtemp(path.join(tempRoot, "outage-rendering-"));
  const previous = process.env.DISABLE_COMPONENT_LIBRARY;

  process.env.DISABLE_COMPONENT_LIBRARY = "true";
  try {
    await build({
      root: fileURLToPath(new URL("../../", import.meta.url)),
      outDir: output,
      integrations: [
        {
          name: "test-rendering-fixtures",
          hooks: {
            "astro:config:setup": ({ injectRoute }) => {
              for (const name of ["rendering", "slots"]) {
                injectRoute({
                  pattern: `/__compatibility/${name}`,
                  entrypoint: fileURLToPath(new URL(`../fixtures/${name}.astro`, import.meta.url)),
                });
              }
            },
          },
        },
      ],
    });
    const markdown = await readFile(
      path.join(output, "__compatibility/rendering/index.html"),
      "utf8"
    );
    const slots = await readFile(path.join(output, "__compatibility/slots/index.html"), "utf8");

    assert.match(markdown, /<h1[^>]*>Markdown fixture<\/h1>/);
    assert.match(markdown, /<strong>bold text<\/strong>/);
    assert.match(markdown, /href="https:\/\/example.com\/"/);
    assert.match(markdown, /<li>First list item<\/li>/);
    assert.match(markdown, /<td>Seven<\/td>/);
    assert.match(markdown, /Exported MDX value/);
    assert.match(markdown, /<strong>Slot wins<\/strong>/);
    assert.doesNotMatch(markdown, /Fallback hidden/);
    assert.match(markdown, /astro-code/);
    assert.match(slots, /First named slot/);
    assert.match(slots, /Second named slot/);
    assert.match(slots, /data-probe="forwarded-prop"/);
    assert.match(slots, /<span>First<\/span> <span>second<\/span>\./);
  } finally {
    if (previous === undefined) delete process.env.DISABLE_COMPONENT_LIBRARY;
    else process.env.DISABLE_COMPONENT_LIBRARY = previous;
    await rm(output, { recursive: true, force: true });
  }
});
