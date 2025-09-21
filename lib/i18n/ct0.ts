import { languageSignal } from "~/i18n/languageSignal"
import type { TranslationBlock } from "~/i18n/TranslationBlock.ts"

export function ct0(b: TranslationBlock): string {
  return b[languageSignal.get()]
}

export function ct1(b: TranslationBlock, x: string | number): string {
  return b[languageSignal.get()].replace("[X]", x.toString())
}

export function ct2(b: TranslationBlock, x1: string | number, x2: string | number): string {
  return b[languageSignal.get()].replace("[X1]", x1.toString()).replace("[X2]", x2.toString())
}

export function ct3(b: TranslationBlock, x1: string | number, x2: string | number, x3: string | number): string {
  return b[languageSignal.get()]
    .replace("[X1]", x1.toString())
    .replace("[X2]", x2.toString())
    .replace("[X3]", x3.toString())
}
