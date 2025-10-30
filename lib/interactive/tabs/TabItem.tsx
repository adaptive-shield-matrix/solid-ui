import { type JSXElement } from "solid-js"
import type { SelectionItem } from "~ui/utils/SelectionItem"

export interface TabItem<T extends string = string> extends SelectionItem<T> {
  children?: JSXElement
}
