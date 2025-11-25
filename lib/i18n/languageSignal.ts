import type { Language } from "~ui/i18n/language"
import { languageFromBrowser } from "~ui/i18n/languageFromBrowser"
import { createSignalObject } from "~ui/utils/createSignalObject"

export const languageSignal = createSignalObject<Language>(languageFromBrowser())
