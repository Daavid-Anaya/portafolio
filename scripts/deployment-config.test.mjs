import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));

function readConfig(environment) {
  const env = { ...process.env };
  delete env.VERCEL;
  delete env.VERCEL_PROJECT_PRODUCTION_URL;
  delete env.VERCEL_URL;

  return JSON.parse(execFileSync(process.execPath, [
    "--input-type=module",
    "-e",
    'import config from "./astro.config.ts"; console.log(JSON.stringify({ site: config.site, base: config.base, output: config.output }));',
  ], {
    cwd: projectRoot,
    env: { ...env, ...environment },
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }));
}

test("Vercel serves assets at the root and uses the production domain, including previews", () => {
  assert.deepEqual(readConfig({
    VERCEL: "1",
    VERCEL_PROJECT_PRODUCTION_URL: "portfolio.example.com",
    VERCEL_URL: "portfolio-preview.example.com",
  }), {
    site: "https://portfolio.example.com",
    base: "/",
    output: "static",
  });
});

test("local builds use localhost and root paths without an OCI fallback", () => {
  assert.deepEqual(readConfig({}), {
    site: "http://localhost:4321",
    base: "/",
    output: "static",
  });
});

test("Vercel rejects a build without its production domain instead of publishing localhost metadata", () => {
  assert.throws(() => readConfig({ VERCEL: "1" }), (error) => {
    assert.match(error.stderr, /VERCEL_PROJECT_PRODUCTION_URL is required/);
    return true;
  });
});

test("Vercel build publishes root assets and production sitemap URLs, including robots.txt", () => {
  const scratch = mkdtempSync(join(tmpdir(), "portfolio-build-"));
  try {
    const output = join(scratch, "dist");
    execFileSync(process.execPath, [
      "node_modules/astro/bin/astro.mjs", "build", "--outDir", output,
    ], {
      cwd: projectRoot,
      env: {
        ...process.env,
        VERCEL: "1",
        VERCEL_PROJECT_PRODUCTION_URL: "portfolio.example.com",
        VERCEL_URL: "portfolio-preview.example.com",
        ASTRO_TELEMETRY_DISABLED: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    const html = readFileSync(join(output, "index.html"), "utf8");
    assert.ok(!html.includes("/n/axiwklk6zpoi/"));
    assert.ok(!html.includes("portfolio-preview.example.com"));
    assert.ok(html.includes("https://portfolio.example.com/favicon.svg"));
    assert.ok(existsSync(join(output, "profile/retrato-david.jpg")));
    for (const name of ["sitemap-index.xml", "sitemap-0.xml", "robots.txt"]) {
      const content = readFileSync(join(output, name), "utf8");
      assert.ok(content.includes("https://portfolio.example.com/"), name);
      assert.ok(!content.includes("objectstorage"), name);
    }
  } finally {
    rmSync(scratch, { recursive: true, force: true });
  }
});
