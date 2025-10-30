import { createEffect, onCleanup } from "solid-js"
import { ct0, ct1 } from "~ui/i18n/ct0"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { t4theme } from "~ui/interactive/theme/t4theme"
import { themeInit, themeRotate, themeSignal } from "~ui/interactive/theme/themeSignal"
import { themeIcon, type ThemeVariant } from "~ui/interactive/theme/themeVariant"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

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

export interface ThemeButtonProps extends MayHaveClass {
  showText?: boolean
}

export function ThemeButton(p: ThemeButtonProps) {
  createEffect(themeInit)
  const navigate = (to: string) => {}
  const handleGlobalKeyDown = createGlobalKeyHandler(navigate)

  createEffect(() => {
    window.addEventListener("keydown", handleGlobalKeyDown)
    onCleanup(() => window.removeEventListener("keydown", handleGlobalKeyDown))
  })
  return (
    <ButtonIconOnly
      title={ct1(t4theme.Current_theme_x, ct0(t4theme[themeSignal.get()]))}
      icon={themeIcon(themeSignal.get())}
      variant={buttonVariant.ghost}
      class={classMerge(p.class)}
      onClick={themeRotate}
    >
      {p.showText && themeText()}
    </ButtonIconOnly>
  )
}

function themeText(): string {
  const theme: ThemeVariant = themeSignal.get()
  return ct0(t4theme[theme])
}
