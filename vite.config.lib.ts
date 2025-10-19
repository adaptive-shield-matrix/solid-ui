import { glob } from "glob"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import solid from "vite-plugin-solid"

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "~ui": new URL("./lib", import.meta.url).pathname,
      "~utils": new URL("././node_modules/@adaptive-sm/utils/dist", import.meta.url).pathname,
    },
  },
  plugins: [
    solid(),
    dts({
      include: ["lib/**/*"],
      outDir: "dist",
      // Use your tsconfig.lib.json for proper configuration
      tsconfigPath: "./tsconfig.lib.json",
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      // Entry point(s) for your library
      // entry: resolve(__dirname, "lib/**/*.{ts,tsx}"),
      entry: glob.sync(resolve(__dirname, "lib/**/*.{ts,tsx}"), {
        ignore: ["**/*.test.ts", "**/*.test.tsx"],
      }),
      // Output formats - ESM is standard for modern libraries
      formats: ["es"],
    },
    outDir: "dist",
    // Don't minify library code - let consumers decide
    minify: false,
    sourcemap: true,
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "@adaptive-sm/utils",
        "@floating-ui/dom",
        "@mdi/js",
        "@solid-primitives/keyed",
        "@solid-primitives/scheduled",
        "@solidjs/router",
        "clsx",
        "dayjs",
        "tailwind-merge",
        "valibot",
        /^node:.*$/, // Externalize all node imports
        /^bun:.*$/, // Externalize all bun imports
      ],
      output: {
        // Preserve module structure for better tree-shaking
        preserveModules: true,
        preserveModulesRoot: "lib",
      },
    },
  },
})
