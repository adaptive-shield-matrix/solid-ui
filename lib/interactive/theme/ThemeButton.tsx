import { createEffect, onCleanup } from "solid-js"
import { ct0, ct1 } from "~/i18n/ct0.ts"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIconOnly } from "~/interactive/button/ButtonIconOnly.tsx"
import { t4theme } from "~/interactive/theme/t4theme"
import { themeInit, themeRotate, themeSignal } from "~/interactive/theme/themeSignal"
import { themeIcon } from "~/interactive/theme/themeVariant"
import { classMerge } from "~/utils/ui/classMerge"
import type { HasClass } from "~/utils/ui/HasClass"

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

export function ThemeButton(p: HasClass) {
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
    />
  )
}
