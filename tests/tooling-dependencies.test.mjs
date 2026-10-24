import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import test from "node:test";

const require = createRequire(import.meta.url);

test("AJV URI parsing rejects encoded schemes and preserves ordinary resolution", () => {
  const uri = createRequire(require.resolve("ajv"))("fast-uri");

  assert.equal(uri.parse("%68ttps://example.test/schema").error, "URI scheme is malformed.");
  assert.equal(
    uri.resolve("https://example.test/schemas/", "case.json"),
    "https://example.test/schemas/case.json"
  );
});

test("font HTTP client retains integrity checks with external networking disabled", async () => {
  const { MockAgent, fetch } = createRequire(require.resolve("unifont"))("undici");
  const dispatcher = new MockAgent();

  dispatcher.disableNetConnect();
  const body = "local fixture";
  const integrity = `sha256-${createHash("sha256").update(body).digest("base64")}`;

  try {
    const pool = dispatcher.get("https://example.test");

    pool.intercept({ path: "/valid" }).reply(200, body);
    assert.equal(
      await (await fetch("https://example.test/valid", { dispatcher, integrity })).text(),
      body
    );
    pool.intercept({ path: "/mismatch" }).reply(200, "different fixture");
    await assert.rejects(fetch("https://example.test/mismatch", { dispatcher, integrity }));
  } finally {
    await dispatcher.close();
  }
});
