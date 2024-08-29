import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import path from "path";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  site: "https://jradziejewski.github.io/",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
});
