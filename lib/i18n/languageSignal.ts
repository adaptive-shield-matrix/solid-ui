import type { Language } from "~/i18n/language.ts"
import { getBrowserUserDefinedLanguage } from "~/i18n/getBrowserUserDefinedLanguage"
import { createSignalObject } from "~/utils/createSignalObject.ts"

export const languageSignal = createSignalObject<Language>(getBrowserUserDefinedLanguage())
