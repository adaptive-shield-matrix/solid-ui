import { Key } from "@solid-primitives/keyed"
import type { Accessor } from "solid-js"
import { ct0 } from "~/i18n/ct0.ts"
import { t4multiselect } from "~/input/select/t4multiselect.ts"
import { classArr } from "~/utils/classArr.ts"
import type { SignalObject } from "~/utils/createSignalObject.ts"
import type { HasChildren } from "~/utils/HasChildren.ts"
import type { HasClass } from "~/utils/HasClass"
import type { MayHaveClass } from "~/utils/MayHaveClass"

export type ValueDisplayFn = (value: string) => string

export type NativeSingleSelectProps = {
  valueSignal: SignalObject<string>
  getOptions: Accessor<string[]>
  valueDisplay?: ValueDisplayFn
  id?: string
} & HasClass &
  HasChildren

export function NativeSingleSelect(p: NativeSingleSelectProps) {
  return (
    <select
      id={p.id}
      class={classArr(
        "block w-full p-2.5",
        "text-gray-900 dark:text-white text-sm", // text
        "dark:placeholder-gray-400", // text placeholder
        "bg-gray-50 dark:bg-gray-700", // bg
        "rounded-lg border border-gray-300 dark:border-gray-600", // border
        "focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        p.class,
      )}
      value={p.valueSignal.get()}
      onChange={(e) => onChange(e, p)}
    >
      <Key each={p.getOptions()} by={(item) => item} fallback={<NoItems />}>
        {(getItem) => <SelectItem itemValue={getItem()} valueDisplay={p.valueDisplay} />}
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

function NoItems(p: HasClass) {
  return <div class={p.class}>{ct0(t4multiselect.No_entries)}</div>
}

interface SelectItemProps extends MayHaveClass {
  itemValue: string
  valueDisplay?: ValueDisplayFn
}

function SelectItem(p: SelectItemProps) {
  return (
    <option value={p.itemValue} class={p.class}>
      {getDisplayValue(p.itemValue, p.valueDisplay)}
    </option>
  )
}

function getDisplayValue(itemValue: string, valueDisplay?: ValueDisplayFn) {
  if (!valueDisplay) return itemValue
  const hasValue = valueDisplay(itemValue)
  if (!hasValue) return itemValue
  return hasValue
}
