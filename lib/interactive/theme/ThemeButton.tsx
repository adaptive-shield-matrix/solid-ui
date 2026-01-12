import { createEffect, onCleanup } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { themeInit, themeRotate, themeSignal } from "~ui/interactive/theme/themeSignal"
import { themeIcon } from "~ui/interactive/theme/themeVariant"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { ThemeButtonText } from "~ui/interactive/theme/ThemeButtonText"
import { themeButtonTextDefault } from "~ui/interactive/theme/ThemeButtonText"

export interface ThemeButtonProps extends MayHaveClass {
  showText?: boolean
  texts?: ThemeButtonText
}

export function ThemeButton(p: ThemeButtonProps) {
  createEffect(themeInit)
  const navigate = (to: string) => {}
  const handleGlobalKeyDown = createGlobalKeyHandler(navigate)

  const texts = p.texts ?? themeButtonTextDefault

  createEffect(() => {
    window.addEventListener("keydown", handleGlobalKeyDown)
    onCleanup(() => window.removeEventListener("keydown", handleGlobalKeyDown))
  })

  const currentTheme = themeSignal.get()
  const themeName = texts[currentTheme]

  return (
    <ButtonIconOnly
      title={texts.currentTheme(themeName)}
      icon={themeIcon(currentTheme)}
      variant={buttonVariant.ghost}
      class={classMerge(p.class)}
      onClick={themeRotate}
    >
      {p.showText && themeName}
    </ButtonIconOnly>
  )
}

function createGlobalKeyHandler(navigate: (to: string) => void) {
  return (e: KeyboardEvent) => {
    if (e.key === "s" && e.altKey) {
      e.preventDefault()
      themeRotate()
    } else if (e.key === "d" && e.altKey) {
      e.preventDefault()
      navigate("/demos")
    }
  }
}
