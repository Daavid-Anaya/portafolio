import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("production page includes the Vercel Analytics client", async () => {
  const output = new URL("../dist/", import.meta.url);
  const html = await readFile(new URL("index.html", output), "utf8");
  const assets = await readdir(new URL("_astro/", output));
  const scripts = await Promise.all(
    assets.filter((name) => name.endsWith(".js")).map(async (name) => ({
      name,
      source: await readFile(new URL(`_astro/${name}`, output), "utf8"),
    })),
  );
  const inlineScripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => ({ name: null, source: match[1] }));
  const analytics = [...inlineScripts, ...scripts].filter(({ source }) =>
    source.includes("/_vercel/insights/script.js"),
  );
  assert.equal(analytics.length, 1, "expected one Analytics client script");
  if (analytics[0].name) {
    assert.ok(html.includes(analytics[0].name), "page must load the Analytics bundle");
  }
});
