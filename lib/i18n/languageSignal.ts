import { getBrowserUserDefinedLanguage } from "~ui/i18n/getBrowserUserDefinedLanguage"
import type { Language } from "~ui/i18n/language"
import { createSignalObject } from "~ui/utils/createSignalObject"

export const languageSignal = createSignalObject<Language>(getBrowserUserDefinedLanguage())
