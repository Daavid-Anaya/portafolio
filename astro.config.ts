import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const isVercel = process.env.VERCEL === "1";
const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

if (isVercel && !productionDomain) {
  throw new Error("VERCEL_PROJECT_PRODUCTION_URL is required for Vercel builds.");
}

export default defineConfig({
  site: isVercel ? `https://${productionDomain}` : "http://localhost:4321",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
