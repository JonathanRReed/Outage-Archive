import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import sharp from "sharp";
import imageService from "astro/assets/services/sharp";

const astroRequire = createRequire(import.meta.resolve("astro/assets/services/sharp"));
const rootRequire = createRequire(import.meta.url);
const imageConfig = { service: { config: {} } };

test("Astro resolves the patched Sharp and libheif decoder", () => {
  const astroSharp = astroRequire("sharp");

  assert.equal(astroRequire.resolve("sharp"), rootRequire.resolve("sharp"));
  assert.ok(astroSharp.versions.sharp.localeCompare("0.35.5", "en", { numeric: true }) >= 0);
  assert.ok(astroSharp.versions.heif.localeCompare("1.23.2", "en", { numeric: true }) >= 0);
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
