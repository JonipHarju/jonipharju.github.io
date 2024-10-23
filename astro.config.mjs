// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // used for github pages
  site: "https://JonipHarju.github.io/music-blog",
  base: "/music-blog/",
  integrations: [tailwind()],
  devToolbar: {
    enabled: true,
  },
});
