import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  server: {
    port: 3031,
    strictPort: true,
    watch: {
      ignored: [
        "**/.astro/**",
        "**/.cache/**",
        "**/.idea/**",
        "**/.unlighthouse/**",
        "**/.vscode/**",
        "**/build/**",
        "**/data/**",
        "**/dist/**",
        "**/docs/**",
      ],
    },
    allowedHosts: ["solid-ui.com", "solid-ui.localhost"],
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "~": new URL("./lib", import.meta.url).pathname,
    },
  },
  plugins: [solid(), tailwindcss(), visualizer({ filename: "dist/bundle-size.html", gzipSize: true })],
  build: {
    chunkSizeWarningLimit: 1050,
    outDir: "dist",
    assetsDir: "assets",
  },
})
