import { type Language, language } from "~ui/i18n/language"

export function languageFromBrowser(): Language {
  if (!navigator || !navigator.languages) return language.en
  for (const l of navigator.languages) {
    if (l.startsWith("de")) return language.de
    if (l.startsWith("en")) return language.en
  }
  return language.en
}
