import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.threadscribe.ai",
  srcDir: "./src",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://www.threadscribe.ai/thank-you-linkedin/" &&
        page !== "https://www.threadscribe.ai/thank-you/" &&
        page !== "https://www.threadscribe.ai/builder-preview/",
    }),
  ],
});
