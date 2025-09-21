import { defaultLanguage, type Language } from "~/i18n/language.ts"
import type { TranslationBlock } from "~/i18n/TranslationBlock.ts"
import { objectEntries } from "~/utils/obj/objectEntries.ts"

export function t1(b: TranslationBlock): string {
  return b[defaultLanguage]
}

export function tx(b: TranslationBlock, x: string): string {
  return b[defaultLanguage].replace("[X]", x)
}

export function ttr<T extends string>(l: Language, r: Record<T, TranslationBlock>): Record<T, string> {
  return Object.fromEntries(objectEntries(r).map(([k, v]) => [k, v[l]])) as Record<T, string>
}

export function tta(l: Language, a: TranslationBlock[] | Readonly<TranslationBlock[]>): string[] {
  return a.map((b) => b[l])
}

export function tt0(l: Language, b: TranslationBlock): string {
  return b[l]
}

export function tt1(l: Language, b: TranslationBlock, x: string | number): string {
  return b[l].replace("[X]", x.toString())
}

export function tt2(l: Language, b: TranslationBlock, x1: string | number, x2: string | number): string {
  return b[l].replace("[X1]", x1.toString()).replace("[X2]", x2.toString())
}

export function tt3(
  l: Language,
  b: TranslationBlock,
  x1: string | number,
  x2: string | number,
  x3: string | number,
): string {
  return b[l].replace("[X1]", x1.toString()).replace("[X2]", x2.toString()).replace("[X3]", x3.toString())
}

export function mockTranslationBlock(text: string): TranslationBlock {
  return {
    en: text,
    de: text,
  }
}
export function mockTranslationBlockArr(texts: string[]): TranslationBlock[] {
  return texts.map(mockTranslationBlock)
}

export function combineTranslationBlocks(t1: TranslationBlock, t2: TranslationBlock): TranslationBlock {
  return {
    en: t1.en.replace("[X]", t2.en),
    de: t1.de.replace("[X]", t2.de),
  }
}
