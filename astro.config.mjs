// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // used for github pages
  site: "https://JonipHarju.github.io",
  integrations: [tailwind()],
  devToolbar: {
    enabled: true,
  },
});
