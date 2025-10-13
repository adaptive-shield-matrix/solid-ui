import * as v from "valibot"
import { ct0, ct1 } from "~/i18n/ct0"
import { t4theme } from "~/interactive/theme/t4theme"
import {
  getThemeFromStorageOrBrowserPref,
  nextTheme2,
  setThemeToBrowser,
  themeIcon,
  themeLocalStorageKey,
  themeSchema,
  type ThemeVariant,
  themeVariant,
} from "~/interactive/theme/themeVariant"
import { toastAdd } from "~/interactive/toast/toastAdd"
import { toastVariant } from "~/interactive/toast/toastVariant"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const themeSignal = createSignalObject<ThemeVariant>(themeVariant.os)

export function themeInit() {
  const theme = getThemeFromStorageOrBrowserPref()
  themeSet(theme, false)
  themeRegisterStorageListener()
}

export function themeSet(theme: ThemeVariant, saveToStorage: boolean) {
  themeSignal.set(theme)
  setThemeToBrowser(theme)
  if (!saveToStorage) return
  localStorage.setItem(themeLocalStorageKey, theme)
}

function themeRegisterStorageListener() {
  const onStorage = (e: StorageEvent) => {
    if (e.key !== themeLocalStorageKey) return
    const themeString = e.newValue
    const result = v.safeParse(themeSchema, themeString)
    if (!result.success) {
      console.log("failed to parse storage event")
      return
    }
    themeSet(result.output, false)
  }
  window.addEventListener("storage", onStorage)
  return () => {
    window.removeEventListener("storage", onStorage)
  }
}

export function themeRotate() {
  const currentTheme = themeSignal.get()
  const newTheme = nextTheme2(currentTheme)
  const themeText = ct0(t4theme[newTheme])
  const title = ct1(t4theme.Set_theme_x, themeText)
  const icon = themeIcon(newTheme)
  toastAdd({ title, icon, variant: toastVariant.default })
  themeSet(newTheme, true)
}
