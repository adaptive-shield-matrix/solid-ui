import { Button } from "~ui/interactive/button/Button.tsx"
import { buttonVariant } from "~ui/interactive/button/buttonCva.ts"
import { ThemeButton } from "~ui/interactive/theme/ThemeButton.tsx"
import { themeSignal } from "~ui/interactive/theme/themeSignal"
import { type ThemeVariant } from "~ui/interactive/theme/themeVariant"
import { toastAdd } from "~ui/interactive/toast/toastAdd.ts"
import { toastVariant } from "~ui/interactive/toast/toastVariant.ts"

export function DemoTheme() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Theme Demo</h1>
      <div class="space-y-8">
        <ThemeButtonDemo />
        <ThemeInfoDemo />
        <ThemeControlsDemo />
      </div>
    </div>
  )
}

function ThemeButtonDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Theme Button</h2>
      <div class="flex items-center gap-4">
        <ThemeButton />
        <ThemeButton showText />
        <span class="text-sm text-muted-foreground">
          Current theme: {getThemeName()}
        </span>
      </div>
    </div>
  )
}

function ThemeInfoDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Theme Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border rounded-lg">
          <h3 class="font-semibold mb-2">Current Theme</h3>
          <p class="text-lg">{getThemeName()}</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="font-semibold mb-2">Theme Signal Value</h3>
          <p class="text-sm font-mono">{themeSignal.get()}</p>
        </div>
      </div>
    </div>
  )
}

function ThemeControlsDemo() {
  const themes: ThemeVariant[] = ['light', 'dark', 'os']

  const setTheme = (theme: ThemeVariant) => {
    themeSignal.set(theme)
    toastAdd({
      title: `Theme changed to ${getThemeName(theme)}`,
      variant: toastVariant.info
    })
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Theme Controls</h2>
      <div class="flex flex-wrap gap-2">
        {themes.map(theme => (
          <Button
            variant={themeSignal.get() === theme ? buttonVariant.default : buttonVariant.outline}
            onClick={() => setTheme(theme)}
          >
            {getThemeName(theme)}
          </Button>
        ))}
      </div>
      <div class="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900/20">
        <p class="text-sm text-muted-foreground">
          Use Alt+S to cycle through themes, or Alt+D to go to demos.
        </p>
      </div>
    </div>
  )
}

function getThemeName(theme?: ThemeVariant): string {
  const currentTheme = theme || themeSignal.get()
  switch (currentTheme) {
    case 'light': return 'Light'
    case 'dark': return 'Dark'
    case 'os': return 'Auto'
    default: return 'Unknown'
  }
}
