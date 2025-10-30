import { Key } from "@solid-primitives/keyed"
import { ct0 } from "~ui/i18n/ct0"
import { t4multiselect } from "~ui/input/select/t4multiselect"
import { classArr } from "~ui/utils/classArr"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { HasGetOptions } from "~ui/utils/HasGetOptions"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { type MayHaveDisabledAccessor, isDisabled } from "~ui/utils/MayHaveDisabledAccessor"
import type { SelectionItem } from "~ui/utils/SelectionItem"
import type { ValueOrAccessor } from "~ui/utils/ValueOrAccessor"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/radio-group/src/Radio.tsx
 */
export interface RadioSwitchProps extends MayHaveClass, MayHaveChildren, RadioSwitchStateProps, HasGetOptions, MayHaveDisabledAccessor {
  id?: string
  disabled?: ValueOrAccessor<boolean>
}

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

function NoItems(p: MayHaveClass) {
  return <div class={p.class}>{ct0(t4multiselect.No_entries)}</div>
}

interface Option2Props extends RadioSwitchStateProps, MayHaveDisabledAccessor, MayHaveClass {
  item: SelectionItem
  filled: boolean
}

function Option(p: Option2Props) {
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

export interface OptionProps extends RadioSwitchStateProps {
  item: SelectionItem
}

function isChecked(p: OptionProps) {
  return p.item.value === p.valueSignal.get()?.value
}

function getText(p: OptionProps): string {
  const amount = p.item.amount?.()
  if (!amount) return p.item.label
  return `${p.item.label} (${amount})`
}
