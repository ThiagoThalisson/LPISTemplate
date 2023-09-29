import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
})
