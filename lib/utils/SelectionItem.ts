import type { Accessor } from "solid-js"

export type SelectionItem<T extends string = string> = {
  icon?: string
  value: T
  label: string
  disabled?: boolean
  amount?: Accessor<number>
}
