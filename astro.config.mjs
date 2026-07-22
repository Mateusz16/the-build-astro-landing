import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://the-build-showcase.klamatt-mateusz.chatgpt.site",
  output: "static",
  outDir: "./dist/client",
  build: {
    assets: "assets",
  },
  compressHTML: true,
});
