import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://the-build.pages.dev",
  output: "static",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
  compressHTML: true,
});
