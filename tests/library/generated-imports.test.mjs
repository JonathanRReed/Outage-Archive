import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

function decodeAttribute(value) {
  const entities = { quot: '"', apos: "'", lt: "<", gt: ">", amp: "&" };

  return value.replace(
    /&(quot|apos|lt|gt|amp);|&#(\d+);|&#x([\da-f]+);/gi,
    (_, name, decimal, hex) =>
      name
        ? entities[name]
        : String.fromCodePoint(Number.parseInt(decimal || hex, decimal ? 10 : 16))
  );
}

test("every copied Astro example imports its child components", async () => {
  const root = new URL("../../dist/", import.meta.url);
  const files = await readdir(root, { recursive: true });
  let examples = 0;

  for (const file of files.filter((path) => path.endsWith(".html"))) {
    const html = await readFile(new URL(file, root), "utf8");

    for (const match of html.matchAll(/\bdata-code="([^"]*)"/g)) {
      const code = decodeAttribute(match[1]);

      if (!code.startsWith("---\nimport ")) continue;
      examples += 1;
      const imports = new Set([...code.matchAll(/^import (\w+) from /gm)].map((item) => item[1]));

      for (const component of new Set(
        [...code.matchAll(/<([A-Z]\w*)\b/g)].map((item) => item[1])
      )) {
        if (component === "Fragment") continue;
        assert.ok(
          imports.has(component),
          `${file}: copied example is missing the ${component} import`
        );
      }
    }
  }
  assert.ok(examples > 0, "the library must expose copyable Astro examples");
});
