import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  server: {
    port: 3031,
    strictPort: true,
    watch: {
      ignored: ["**/.github/**", "**/data/**", "**/dist/**", "**/ops/**", "**/out/**", "**/docs/**", "**/test/**"],
    },
    allowedHosts: ["solid-ui.com"],
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "~ui": new URL("./lib", import.meta.url).pathname,
      "~utils": new URL("././node_modules/@adaptive-sm/utils/dist", import.meta.url).pathname,
    },
  },
  // @ts-ignore
  plugins: [solid(), tailwindcss(), visualizer({ filename: "dist/bundle-size.html", gzipSize: true })],
  envPrefix: "PUBLIC_",
  build: {
    chunkSizeWarningLimit: 1050,
    outDir: "out",
    assetsDir: "assets",
  },
})
