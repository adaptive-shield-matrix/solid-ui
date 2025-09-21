import type { Accessor } from "solid-js"
import type { SelectionItem } from "~/utils/SelectionItem.tsx"

export type HasGetOptions<T extends string = string> = {
  getOptions: Accessor<SelectionItem<T>[]>
}
