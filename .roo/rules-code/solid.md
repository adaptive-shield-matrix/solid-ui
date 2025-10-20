# solid.js

## general

- use `function` over const function expression
- do not use default exports

## use solid.js build-in components instead of react patterns

### loops

Instead of using `map()` inside JSX or manual `for` loops:

- Prefer the `For` component from **solid-js** for list rendering.
- Move repeating UI blocks into a dedicated function, defined just below the current component within the same file.

### conditions

Instead of adding conditional logic or early returns in React-like patterns:

- Prefer using the `Show` component from solid-js for conditional rendering.
- Place fallback component in a dedicated function, defined just below the current component within the same file.

---

## component classes

### classMerge and classArr

- **Standardize class organization** in Solid components using `classMerge` and `classArr` utility functions
- **Always use `classMerge`** instead of template strings
- **Group classes** by functional category:
  ```tsx
  ;[
    "flex flex-col items-center justify-center", // layout
    "min-h-screen", // sizing
    "bg-gray-50 dark:bg-gray-900", // background
    "p-4", // spacing
  ]
  ```
- **Comment each group** with its purpose
- **Order groups logically**:
  - Layout/Positioning
  - Sizing/Dimensions
  - Backgrounds
  - Borders/Shadows
  - Typography
  - Spacing/Margin/Padding
  - Transitions/Animations
  - State modifiers (hover/focus)
- **Place props.class last** to enable proper override
- Prefer `classArr` for static class lists without dynamic props
- Use `classMerge` when dynamic class props are needed

Incorrect Approach (String Templates):

```tsx
// ErrorPage.tsx
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
```

Correct Approach (ClassMerge + Grouped Arrays):

```tsx
import { classMerge } from "@/ui/utils/classMerge"

<div class={classMerge(
  "flex flex-col items-center justify-center", // layout
  "min-h-screen", // sizing
  "bg-gray-50 dark:bg-gray-900", // background
  "p-4", // spacing
  props.class,
)}>
```

### text color classes

Never use `text-gray-400`, `text-gray-500` or `text-gray-600` - use `text-muted-foreground` instead.

---

## component props

### use and extend existing Interfaces

Always include base utility types for exported general purpose components in "src/ui" folder:

```ts
import type { MayHaveChildren } from "@/ui/utils/MayHaveChildren"
import type { MayHaveClassName } from "@/ui/utils/MayHaveClassName"

export interface ComponentProps extends MayHaveClassName, MayHaveChildren {
  // component-specific props
}

// usage example
function MyComponent(p: ComponentProps) {}
```

if the component has an `icon` property have the props extend existing `MayHaveIcon` interface
if the component has an `title` property have the props extend existing `MayHaveTitle` interface
if the component has an `subtitle` property have the props extend existing `MayHaveSubtitle` interface

### never use object deconstruction

Always name the component properties, named `p`:

```ts
// bad
function SessionButton({ session }: { session: UserSession }) {}

// good
function SessionButton(p: { session: UserSession }) {
  // usage: how to access properties
  p.session
}
```
### use existing components defined in `src/ui`

examples `ButtonIcon`
