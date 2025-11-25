import type { Language } from "~ui/i18n/language"

export const languageText = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  tj: "Тоҷикӣ",
} as const satisfies Record<Language, string>
