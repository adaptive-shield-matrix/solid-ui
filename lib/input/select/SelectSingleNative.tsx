import { Key } from "@solid-primitives/keyed"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { ttt } from "~ui/i18n/ttt"
import { classArr } from "~ui/utils/classArr"
import type { HasGetOptions } from "~ui/utils/HasGetOptions"
import type { HasValueSignalString } from "~ui/utils/HasValueSignalString"
import type { MayHaveValueText } from "~ui/utils/HasValueText"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveDisabled } from "~ui/utils/MayHaveDisabled"
import type { MayHaveId } from "~ui/utils/MayHaveId"

export type StringStringFn = (value: string) => string

export interface SelectSingleNativeProps
  extends HasValueSignalString,
    HasGetOptions,
    MayHaveValueText,
    MayHaveClass,
    MayHaveId,
    MayHaveChildren,
    MayHaveDisabled {
  texts?: SelectSingleNativeTexts
}

export type SelectSingleNativeTexts = {
  noEntries: string
}

export function SelectSingleNative(p: SelectSingleNativeProps) {
  const texts =
    p.texts ??
    ({
      noEntries: ttt("No entries"),
    } as const satisfies SelectSingleNativeTexts)

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
        p.disabled && classesDisabledDirectly,
        p.class,
      )}
      value={p.valueSignal.get()}
      onChange={(e) => onChange(e, p)}
      disabled={p.disabled}
    >
      <Key each={p.getOptions()} by={(item) => item} fallback={<NoItems texts={texts} />}>
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
  p: SelectSingleNativeProps,
): void {
  p.valueSignal.set(e.currentTarget.value)
}

interface NoItemsProps extends MayHaveClass {
  texts: SelectSingleNativeTexts
}

function NoItems(p: NoItemsProps) {
  return <div class={p.class}>{p.texts.noEntries}</div>
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
