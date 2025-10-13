import { getBrowserUserDefinedLanguage } from "~ui/i18n/getBrowserUserDefinedLanguage"
import type { Language } from "~ui/i18n/language"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export const languageSignal = createSignalObject<Language>(getBrowserUserDefinedLanguage())
