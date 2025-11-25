import * as v from "valibot"
import { ttl, ttl1 } from "~ui/i18n/ttl"
import { tbDark } from "~ui/interactive/theme/i18n/tbDark"
import { tbLight } from "~ui/interactive/theme/i18n/tbLight"
import { tbOs } from "~ui/interactive/theme/i18n/tbOs"
import { tbSetThemeX } from "~ui/interactive/theme/i18n/tbSetThemeX"
import {
  getThemeFromStorageOrBrowserPref,
  nextTheme2,
  setThemeToBrowser,
  themeIcon,
  themeLocalStorageKey,
  themeSchema,
  type ThemeVariant,
  themeVariant,
} from "~ui/interactive/theme/themeVariant"
import { toastAdd } from "~ui/interactive/toast/toastAdd"
import { toastVariant } from "~ui/interactive/toast/toastVariant"
import { createSignalObject } from "~ui/utils/createSignalObject"

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

  const themeTranslations = {
    light: tbLight,
    dark: tbDark,
    os: tbOs,
  } as const

  const themeText = ttl(themeTranslations[newTheme])
  const title = ttl1(tbSetThemeX, themeText)
  const icon = themeIcon(newTheme)
  toastAdd({ title, icon, variant: toastVariant.default })
  themeSet(newTheme, true)
}
