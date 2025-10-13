import { type JSXElement } from "solid-js"
import type { SelectionItem } from "~ui/utils/ui/SelectionItem"

export type TabItem<T extends string = string> = SelectionItem<T> & {
  children?: JSXElement
}
