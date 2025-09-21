import { type JSXElement } from "solid-js"
import type { SelectionItem } from "~/utils/SelectionItem.tsx"

export type TabItem<T extends string = string> = SelectionItem<T> & {
  children?: JSXElement
}
