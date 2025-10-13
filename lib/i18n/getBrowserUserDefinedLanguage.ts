import { type Language, language } from "~/i18n/language"

export function getBrowserUserDefinedLanguage(): Language {
  if (!navigator || !navigator.languages) return language.en
  for (const l of navigator.languages) {
    if (l.startsWith("de")) return language.de
    if (l.startsWith("en")) return language.en
  }
  return language.en
}

export function showLanguageSwitcher(): boolean {
  const languages = navigator.languages
  const hasDe = hasLanguage(language.de, languages)
  if (!hasDe) return false
  const hasEn = hasLanguage(language.en, languages)
  if (!hasEn) return false
  return true
}

function hasLanguage(l: Language, languages: string[] | readonly string[]) {
  return languages.some((lang) => lang.startsWith(l))
}
