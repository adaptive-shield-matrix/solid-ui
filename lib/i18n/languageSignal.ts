import { getBrowserUserDefinedLanguage } from "~/i18n/getBrowserUserDefinedLanguage"
import type { Language } from "~/i18n/language"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const languageSignal = createSignalObject<Language>(getBrowserUserDefinedLanguage())
