# Adaptive Solid UI

A library of reusable UI components for Solid.js projects. Built with TypeScript, Tailwind CSS, and Solid.js. Components are designed to be accessible, customizable, and easy to integrate.

[![npm version](https://badge.fury.io/js/%40adaptive-sm%2Fsolid-ui.svg)](https://badge.fury.io/js/%40adaptive-sm%2Fsolid-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solid.js](https://img.shields.io/badge/Solid.js-1.9.9-blue.svg)](https://www.solidjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-blueviolet.svg)](https://tailwindcss.com/)

Quick link

- code - https://github.com/adaptive-shield-matrix/astro-ui
- npm - https://www.npmjs.com/package/@adaptive-sm/astro-ui
- component demo - https://adaptive-solid-ui.pages.dev/

## Features

- **Accessible Components**: Built with accessibility in mind, following ARIA standards.
- **TypeScript Support**: Fully typed for better developer experience.
- **Tailwind CSS Integration**: Styled with Tailwind for easy customization.
- **Solid.js Optimized**: Leverages Solid.js reactivity for performant UIs.
- **Modular Design**: Import only the components you need.
- **Dark Mode Ready**: Supports light and dark themes out of the box.

## Installation

Install the package using Bun (recommended) or npm:

```bash
bun add @adaptive-sm/solid-ui
```

or

```bash
npm install @adaptive-sm/solid-ui
```

Ensure you have the peer dependencies installed:

```bash
bun add solid-js clsx tailwind-merge valibot dayjs @solid-primitives/keyed @solid-primitives/scheduled @floating-ui/dom @mdi/js
```

## Setup: Tailwind CSS Configuration

To ensure Tailwind scans the library's source files for classes (since components are published as source without a build step), add the following `@source` directive to your project's `src/layouts/global.css` (or equivalent global stylesheet):

```css
@source '/node_modules/@adaptive-sm/solid-ui/lib/**/*.{astro,html,md,mdx,ts,tsx}';
```

This tells Tailwind to include classes from the library's `.tsx`, `.ts`, and other relevant files in the purge process, preventing unused classes from being purged during the build. Without it, Tailwind might not detect classes used in imported components, leading to missing styles.

## Option Configuration: Import Aliases

### Typescript

In your `tsconfig.json`, set up the `~` alias to point to the library:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "~/*": ["./node_modules/@adaptive-sm/solid-ui/lib/*"]
    }
  }
}
```

### Vite

In your `vite.config.ts`, set up the `~` alias to point to the library:

```js
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "~": new URL("./node_modules/@adaptive-sm/solid-ui/lib", import.meta.url).pathname,
    },
  },
  plugins: [solid(), tailwindcss()],
})
```

## Usage Example

```tsx
import { Button } from "@adaptive-sm/solid-ui/interactive/button/Button.tsx"
import { buttonVariant } from "@adaptive-sm/solid-ui/interactive/button/buttonCva"

function MyComponent() {
  return (
    <Button variant={buttonVariant.link} onClick={() => alert("Clicked!")}>
      Click Me
    </Button>
  )
}
```

## Components

The library includes a variety of UI components organized by category:

### Interactive

- [Button](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/button) - Standard and icon buttons.
- [Link](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/link) - Styled links and buttons.
- [Toggle](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/toggle) - Toggle switches.
- [Dialog](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/dialog) - Native dialogs.
- [Toast](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/toast) - Notification toasts.
- [Popover](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/popover) - Simple popovers.
- [Tabs](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/interactive/tabs) - Tab navigation.

### Input

- [Input](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/input/input) - Text inputs.
- [Textarea](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/input/textarea) - Multi-line textareas.
- [Select](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/input/select) - Single and multi-selects.
- [Radio](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/input/radio) - Radio switches.
- [Form](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/input/form) - Form utilities.

### Table

- [Table](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/table) - Data tables with sorting, pagination, and filtering.
  - Table1: Basic table.
  - Table2: Sortable table.
  - Table3: Advanced table with search and pagination.

### Static

- [Container](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/container) - Layout wrappers and page containers.
- [Loader](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/loaders) - Loading animations.
- [Pages](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/pages) - Error and success pages.
- [Img](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/img) - Optimized image component.
- [Badge](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/badge) - Badge component.
- [Timeline](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/static/timeline) - Timeline layout.

### Utils

- [Class Utilities](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/utils/ui) - `classMerge`, `classArr` for Tailwind class management.
- [i18n](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/i18n) - Basic internationalization support.
- [Arrays & Objects](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/lib/utils/arr) - Utility functions for data manipulation.

For detailed API and props, see the [documentation](https://github.com/adaptive-shield-matrix/solid-ui/tree/main/docs) or check the source in `/lib`.

## Development

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/adaptive-shield-matrix/solid-ui.git
   cd solid-ui
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Run development server:
   ```bash
   bun run dev
   ```

### Scripts

- `bun run dev`: Start development server (Rsbuild).
- `bun run build`: Build for production.
- `bun run vite:dev`: Alternative dev server with Vite.
- `bun run generateDemoList`: Generate demo list for components.
- `bun run publish`: Publish to npm.

### Project Structure

```
.
├── lib/                 # Source components
│   ├── interactive/     # Interactive elements (buttons, dialogs, etc.)
│   ├── input/           # Form inputs
│   ├── table/           # Data tables
│   ├── static/          # Static UI elements
│   ├── utils/           # Utility functions
│   └── types.d.ts       # Global types
├── src/                 # Demo app and examples
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

### Contributing

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on top of [Solid.js](https://www.solidjs.com/).
- Styled with [Tailwind CSS](https://tailwindcss.com/).
- Icons from [MDI](https://pictogrammers.com/library/mdi/).

For more information, visit the [GitHub repository](https://github.com/adaptive-shield-matrix/solid-ui).
