import type { Accessor } from "solid-js"
import type { SelectionItem } from "~/utils/ui/SelectionItem"

export type HasGetOptions<T extends string = string> = {
  getOptions: Accessor<SelectionItem<T>[]>
}
