import { Key } from "@solid-primitives/keyed"
import type { Accessor } from "solid-js"
import { ct0 } from "~ui/i18n/ct0"
import { t4multiselect } from "~ui/input/select/t4multiselect"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classArr } from "~ui/utils/classArr"
import type { SignalObject } from "~ui/utils/createSignalObject"

export type StringStringFn = (value: string) => string

export interface NativeSingleSelectProps extends MayHaveClass, MayHaveChildren {
  valueSignal: SignalObject<string>
  getOptions: Accessor<string[]>
  valueText?: StringStringFn
  id?: string
}

export function NativeSingleSelect(p: NativeSingleSelectProps) {
  return (
    <select
      id={p.id}
      class={classArr(
        "block w-full p-2.5",
        "text-gray-900 dark:text-white", // text
        "placeholder:text-muted-foreground", // text placeholder
        "bg-gray-50 dark:bg-gray-700", // bg
        "rounded-lg border border-gray-300 dark:border-gray-500", // border
        "focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        p.class,
      )}
      value={p.valueSignal.get()}
      onChange={(e) => onChange(e, p)}
    >
      <Key each={p.getOptions()} by={(item) => item} fallback={<NoItems />}>
        {(getItem) => <SelectItem itemValue={getItem()} valueText={p.valueText} />}
      </Key>
    </select>
  )
}

function onChange(
  e: Event & {
    currentTarget: HTMLSelectElement
    target: HTMLSelectElement
  },
  p: NativeSingleSelectProps,
): void {
  p.valueSignal.set(e.currentTarget.value)
}

function NoItems(p: MayHaveClass) {
  return <div class={p.class}>{ct0(t4multiselect.No_entries)}</div>
}

interface SelectItemProps extends MayHaveClass {
  itemValue: string
  valueText?: StringStringFn
}

function SelectItem(p: SelectItemProps) {
  return (
    <option value={p.itemValue} class={p.class}>
      {getDisplayValue(p.itemValue, p.valueText)}
    </option>
  )
}

function getDisplayValue(itemValue: string, valueText?: StringStringFn) {
  if (!valueText) return itemValue
  const hasValue = valueText(itemValue)
  if (!hasValue) return itemValue
  return hasValue
}
