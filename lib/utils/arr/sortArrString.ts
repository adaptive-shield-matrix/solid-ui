import type { Language } from "~/i18n/language"

export function sortArrString(l: Language, array: string[]) {
  array.sort((a, b) => sortFn(l, a, b))
  return array
}

function sortFn(l: Language, a: string, b: string) {
  return a.toString().localeCompare(b.toString(), l, { numeric: true })
}
