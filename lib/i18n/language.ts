export type Language = keyof typeof language
export const language = {
  en: "en",
  de: "de",
} as const

export const defaultLanguage: Language = language.de
// export let defaultLanguage: Language = languages.en

export function isDe() {
  return defaultLanguage === language.de
}

export function isEn() {
  return defaultLanguage === language.en
}

export const knownLanguages = {
  en: "English",
  de: "Deutsch",
} as const

export const languageFlag = {
  en: "🇺🇸",
  de: "🇩🇪",
} as const
