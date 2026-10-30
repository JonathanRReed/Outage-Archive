import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import sharp from "sharp";
import imageService from "astro/assets/services/sharp";
import { satisfies } from "semver";

const astroRequire = createRequire(import.meta.resolve("astro/assets/services/sharp"));
const rootRequire = createRequire(import.meta.url);
const imageConfig = { service: { config: {} } };

const isPatchedDecoder = (versions) =>
  satisfies(versions.sharp, ">=0.35.5") && satisfies(versions.heif, ">=1.23.3");

test("the decoder version guard requires patched stable releases", () => {
  assert.equal(isPatchedDecoder({ sharp: "0.35.5-rc.1", heif: "1.23.3" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.5", heif: "1.23.3-rc.1" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.6-rc.1", heif: "1.23.3" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.4", heif: "1.23.3" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.5", heif: "1.23.2" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.5", heif: "1.23.1" }), false);
  assert.equal(isPatchedDecoder({ sharp: "0.35.5", heif: "1.23.3" }), true);
});

test("Astro resolves the patched Sharp and libheif decoder", () => {
  const astroSharp = astroRequire("sharp");

  assert.equal(astroRequire.resolve("sharp"), rootRequire.resolve("sharp"));
  assert.ok(isPatchedDecoder(astroSharp.versions));
});

test("Astro preserves cover resizing and WebP output", async () => {
  const input = await sharp({
    create: { width: 16, height: 12, channels: 3, background: "#123456" },
  })
    .png()
    .toBuffer();
  const output = await imageService.transform(
    input,
    { src: "fixture.png", width: 8, height: 8, fit: "cover", format: "webp" },
    imageConfig
  );
  const metadata = await sharp(output.data).metadata();

  assert.equal(output.format, "webp");
  assert.equal(metadata.width, 8);
  assert.equal(metadata.height, 8);
});

test("Astro can still decode a valid AVIF image with the patched native libraries", async () => {
  const input = await sharp({
    create: { width: 16, height: 12, channels: 3, background: "#123456" },
  })
    .avif()
    .toBuffer();
  const output = await imageService.transform(
    input,
    { src: "fixture.avif", width: 8, format: "webp" },
    imageConfig
  );
  const metadata = await sharp(output.data).metadata();

  assert.equal(output.format, "webp");
  assert.equal(metadata.width, 8);
  assert.equal(metadata.height, 6);
});
