import { mdiCheck, mdiClose, mdiPlus } from "@mdi/js"
import { Key } from "@solid-primitives/keyed"
import { mergeProps } from "solid-js"
import { ct0, ct1 } from "~ui/i18n/ct0"
import { t4multiselect } from "~ui/input/select/t4multiselect"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import type { ButtonIcon1Props } from "~ui/interactive/button/ButtonIcon1"
import { SimplePopover3 } from "~ui/interactive/popover/SimplePopover3"
import { classArr } from "~ui/utils/ui/classArr"
import { classMerge } from "~ui/utils/ui/classMerge"
import type { SignalObject } from "~ui/utils/ui/createSignalObject"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import type { HasClass } from "~ui/utils/ui/HasClass"
import type { HasGetOptions } from "~ui/utils/ui/HasGetOptions"
import type { SelectionItem } from "~ui/utils/ui/SelectionItem"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/checkbox/src/Checkbox.tsx
 */
export type MultiselectProps<T extends string = string> = {
  buttonProps: ButtonIcon1Props
  textNoEntries?: string
  textAddEntry?: string
} & MultiselectState<T> &
  HasClass &
  HasChildren

export type MultiselectState<T extends string = string> = MultiselectStateValue<T> & MultiselectStateOptions<T>

export type MultiselectStateValue<T extends string = string> = {
  valueSignal: SignalObject<SelectionItem<T>[]>
}

export type MultiselectStateOptions<T extends string = string> = HasGetOptions<T>

export function Multiselect<T extends string = string>(p: MultiselectProps<T>) {
  const buttonProps = mergeProps(
    {
      icon: mdiPlus,
      children: p.textAddEntry ?? ct0(t4multiselect.Add_entry),
    },
    p.buttonProps,
  )
  return (
    <div
      class={classArr(
        "group border border-input",
        "px-2 py-2 text-sm",
        "ring-offset-background ",
        "rounded-md",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        "flex flex-col items-center justify-center gap-1", // layout
      )}
    >
      <SelectedValues valueSignal={p.valueSignal} />
      <SimplePopover3 buttonProps={buttonProps}>
        <div class={classArr("bg-white dark:bg-black", "max-h-dvh", "grid grid-cols-3 gap-x-2 gap-y-1")}>
          <OptionList valueSignal={p.valueSignal} getOptions={p.getOptions} />
        </div>
      </SimplePopover3>
    </div>
  )
}

type MultiselectOptionState<T extends string = string> = { option: SelectionItem<T> } & MultiselectStateValue<T>

function SelectedValues<T extends string = string>(p: MultiselectStateValue<T>) {
  //  items-center justify-center
  return (
    <div class={"flex flex-wrap gap-1"}>
      <Key each={p.valueSignal.get()} by={(item) => item.value} fallback={<NoItems />}>
        {(item) => <SelectedValue option={item()} valueSignal={p.valueSignal} />}
      </Key>
    </div>
  )
}

function SelectedValue<T extends string = string>(p: MultiselectOptionState<T>) {
  return (
    <ButtonIcon
      variant={buttonVariant.outline}
      iconRight={mdiClose}
      class={"text-sm px-2 py-1"}
      data-value={p.option.value}
      onMouseDown={(e) => optionRemove(p)}
      onClick={(e) => optionRemove(p)}
      title={ct1(t4multiselect.Remove_x, p.option.label)}
    >
      {p.option.label}
    </ButtonIcon>
  )
}

function OptionList<T extends string = string>(p: MultiselectState<T>) {
  return (
    <>
      <Key each={p.getOptions()} by={(item) => item.value} fallback={<NoItems />}>
        {(item) => <ListOption option={item()} valueSignal={p.valueSignal} />}
      </Key>
    </>
  )
}

function ListOption<T extends string = string>(p: MultiselectOptionState<T>) {
  return (
    <>
      <ButtonIcon
        type="button"
        role="checkbox"
        aria-checked={optionIsSelected(p)}
        data-state={optionIsSelected(p)}
        iconRight={optionIsSelected(p) ? mdiCheck : undefined}
        onClick={(e) => {
          // console.log("onchange", e.currentTarget.id, e.currentTarget.checked)
          toggleOption(p)
        }}
        variant={buttonVariant.ghost}
        // class={optionIsSelected(p.option, p.valueSignal) ? "" : "pl-8"}
        class={"justify-start"}
      >
        {p.option.label}
      </ButtonIcon>
    </>
  )
}

function toggleOption<T extends string = string>(p: MultiselectOptionState<T>) {
  const hasOption = optionIsSelected(p)
  if (hasOption) {
    return optionRemove(p)
  }
  return optionAdd(p)
}

function optionRemove<T extends string = string>(p: MultiselectOptionState<T>) {
  const newValues = p.valueSignal.get().filter((v) => v.value !== p.option.value)
  p.valueSignal.set(newValues)
}

function optionAdd<T extends string = string>(p: MultiselectOptionState<T>) {
  const newValues = [...p.valueSignal.get(), p.option]
  newValues.sort((a, b) => a.label.localeCompare(b.label))
  p.valueSignal.set(newValues)
}

function optionIsSelected<T extends string = string>(p: MultiselectOptionState<T>) {
  return p.valueSignal.get().some((v) => v.value === p.option.value)
}

function NoItems(p: HasClass) {
  return (
    <div
      class={classMerge(
        "py-2 px-3",
        // button
        "rounded-md ring-offset-background", // rounded, rings
        "border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-900", // border
        p.class,
      )}
    >
      {ct0(t4multiselect.No_entries)}
    </div>
  )
}
