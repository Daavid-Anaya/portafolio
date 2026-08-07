import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://axiwklk6zpoi.objectstorage.mx-queretaro-1.oci.customer-oci.com",
  base: "/n/axiwklk6zpoi/b/portafolio-digital/o/",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
