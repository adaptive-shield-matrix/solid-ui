export type Language = keyof typeof language
export const language = {
  en: "en",
  de: "de",
  ru: "ru",
  tj: "tj",
} as const

export const languageDefault: Language = language.de

export function isEn(l: Language) {
  return languageDefault === language.en
}
