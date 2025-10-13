import { Key } from "@solid-primitives/keyed"
import { ct0 } from "~/i18n/ct0"
import { t4multiselect } from "~/input/select/t4multiselect"
import { classArr } from "~/utils/ui/classArr"
import type { SignalObject } from "~/utils/ui/createSignalObject"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { HasClass } from "~/utils/ui/HasClass"
import { type HasDisabled, isDisabled } from "~/utils/ui/HasDisabled"
import type { HasGetOptions } from "~/utils/ui/HasGetOptions"
import type { SelectionItem } from "~/utils/ui/SelectionItem"
import type { ValueOrAccessor } from "~/utils/ui/ValueOrAccessor"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/radio-group/src/Radio.tsx
 */
export type RadioSwitchProps = {
  id?: string
  disabled?: ValueOrAccessor<boolean>
} & HasClass &
  HasChildren &
  RadioSwitchStateProps &
  HasGetOptions &
  HasDisabled

type RadioSwitchStateProps = {
  valueSignal: SignalObject<SelectionItem | null>
}

export function RadioSwitch(p: RadioSwitchProps) {
  const filled = true
  return (
    <div
      id={p.id}
      role="radiogroup"
      data-disabled={isDisabled(p)}
      class={classArr(
        "flex flex-wrap gap-2",
        // "grid gap-2 rounded-md p-2",
        filled && "bg-white dark:bg-black", // bg
        filled && "border border-slate-200 dark:border-slate-700", // border
        p.class,
      )}
    >
      <Key each={p.getOptions()} by={(item) => item.value} fallback={<NoItems />}>
        {(item) => <Option item={item()} valueSignal={p.valueSignal} disabled={p.disabled} filled={filled} />}
      </Key>
    </div>
  )
}

function NoItems(p: HasClass) {
  return <div class={p.class}>{ct0(t4multiselect.No_entries)}</div>
}

function Option(p: { item: SelectionItem; filled: boolean } & RadioSwitchStateProps & HasDisabled & HasClass) {
  // console.log("Option", p.item.value, "value:", p.valueSignal.get())
  return (
    <button
      type="button"
      role="radio"
      // value={p.item.value}
      disabled={isDisabled(p) || isDisabled(p.item)}
      aria-checked={isChecked(p)}
      data-checked={isChecked(p)}
      data-state={isChecked(p) ? "checked" : "unchecked"}
      data-disabled={isDisabled(p) || isDisabled(p.item)}
      value={isChecked(p) ? "on" : "off"}
      class={classArr(
        // "block",
        "cursor-pointer select-none",
        "rounded-sm",
        "px-3 py-2 text-center",
        isChecked(p) ? "bg-blue-500 text-white" : "hover:bg-slate-50 dark:hover:bg-slate-900", // bg hover
        "flex gap-2",
        p.class,
      )}
      onClick={(e) => optionToggle(p)}
    >
      {getText(p)}
    </button>
  )
}

function optionToggle(p: OptionProps) {
  let prev = p.valueSignal.get()
  // console.log("optionToggle", p.item.value, "prev:", prev)
  if (prev === p.item) return
  p.valueSignal.set(p.item)
}

type OptionProps = {
  item: SelectionItem
} & RadioSwitchStateProps

function isChecked(p: OptionProps) {
  return p.item.value === p.valueSignal.get()?.value
}

function getText(p: OptionProps): string {
  const amount = p.item.amount?.()
  if (!amount) return p.item.label
  return `${p.item.label} (${amount})`
}
