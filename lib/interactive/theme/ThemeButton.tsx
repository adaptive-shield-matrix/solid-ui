import { createEffect, onCleanup } from "solid-js"
import { ttl, ttl1 } from "~ui/i18n/ttl"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { tbCurrentThemeX } from "~ui/interactive/theme/i18n/tbCurrentThemeX"
import { tbDark } from "~ui/interactive/theme/i18n/tbDark"
import { tbLight } from "~ui/interactive/theme/i18n/tbLight"
import { tbOs } from "~ui/interactive/theme/i18n/tbOs"
import { themeInit, themeRotate, themeSignal } from "~ui/interactive/theme/themeSignal"
import { themeIcon, type ThemeVariant } from "~ui/interactive/theme/themeVariant"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

const themeTranslations = {
  light: tbLight,
  dark: tbDark,
  os: tbOs,
} as const

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
      title={ttl1(tbCurrentThemeX, ttl(themeTranslations[themeSignal.get()]))}
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
  return ttl(themeTranslations[theme])
}
