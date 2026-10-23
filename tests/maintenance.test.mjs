import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import MarkdownIt from "markdown-it";
import { satisfies } from "semver";

const readJson = async (file) => JSON.parse(await readFile(new URL(file, import.meta.url), "utf8"));

test("the canonical npm lock resolves patched markdown-it without a major migration", async () => {
  const manifest = await readJson("../package.json");
  const lock = await readJson("../package-lock.json");
  const installed = await readJson("../node_modules/markdown-it/package.json");

  assert.equal(manifest.dependencies["markdown-it"], "^14.3.3");
  assert.ok(satisfies(installed.version, ">=14.3.3 <15"));
  assert.equal(lock.packages["node_modules/markdown-it"].version, installed.version);
});

test("patched Markdown keeps editorial HTML, references, lists and tables", () => {
  const md = new MarkdownIt({ html: true });
  const html = md.render(
    '<span class="editorial">Filed</span> **today**. [Source][ref]\n\n[ref]: https://example.com/ "Report"\n\n- Record\n\n| Type | Status |\n| --- | --- |\n| DNS | Filed |\n'
  );

  assert.match(html, /<span class="editorial">Filed<\/span> <strong>today<\/strong>/);
  assert.match(html, /<a href="https:\/\/example.com\/" title="Report">Source<\/a>/);
  assert.match(html, /<li>Record<\/li>/);
  assert.match(html, /<td>DNS<\/td>/);
});

test("CI exercises every supported release gate with immutable npm installs", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/test.yml", import.meta.url),
    "utf8"
  );

  for (const command of [
    "npm ci",
    "npm run check",
    "npm test",
    "npm run test:rendering",
    "npm run build",
    "npm run test:production",
    "npm run test:library",
    "npm audit",
    "npm audit --omit=dev",
  ]) {
    assert.ok(workflow.includes(`run: ${command}\n`), `CI must run ${command}`);
  }
  assert.match(workflow, /^  lint:\n    name: Lint$/m);
  assert.doesNotMatch(workflow, /continue-on-error|audit-level|npm install/);
});
