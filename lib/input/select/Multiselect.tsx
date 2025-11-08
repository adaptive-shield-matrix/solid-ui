import { mdiCheck, mdiClose, mdiPlus } from "@mdi/js"
import { Key } from "@solid-primitives/keyed"
import type { Accessor } from "solid-js"
import { mergeProps } from "solid-js"
import { ct0, ct1 } from "~ui/i18n/ct0"
import { t4multiselect } from "~ui/input/select/t4multiselect"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import type { CorvuPopoverProps } from "~ui/interactive/popover/CorvuPopover"
import { CorvuPopover } from "~ui/interactive/popover/CorvuPopover"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/checkbox/src/Checkbox.tsx
 */
export interface Multiselect2Props extends MayHaveClass, MayHaveChildren {
  buttonProps: CorvuPopoverProps
  textNoEntries?: string
  textAddEntry?: string
  getOptions: Accessor<string[]>
  valueSignal: SignalObject<string[]>
  valueDisplay?: (value: string) => string
}

export function Multiselect(p: Multiselect2Props) {
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
        p.class,
      )}
    >
      <SelectedValues2 valueSignal={p.valueSignal} valueDisplay={p.valueDisplay} />
      <CorvuPopover {...buttonProps}>
        <div class={classArr("bg-white dark:bg-black", "max-h-dvh", "grid grid-cols-3 gap-x-2 gap-y-1")}>
          <OptionList2 valueSignal={p.valueSignal} getOptions={p.getOptions} valueDisplay={p.valueDisplay} />
        </div>
      </CorvuPopover>
    </div>
  )
}

interface Multiselect2OptionState {
  option: string
}

interface Multiselect2OptionState {
  valueSignal: SignalObject<string[]>
  valueDisplay?: (value: string) => string
}

function SelectedValues2(p: { valueSignal: SignalObject<string[]>; valueDisplay?: (value: string) => string }) {
  return (
    <div class={"flex flex-wrap gap-1"}>
      <Key each={p.valueSignal.get()} by={(item) => item} fallback={<NoItems2 />}>
        {(item) => <SelectedValue2 option={item()} valueSignal={p.valueSignal} valueDisplay={p.valueDisplay} />}
      </Key>
    </div>
  )
}

function SelectedValue2(p: Multiselect2OptionState) {
  const label = () => (p.valueDisplay ? p.valueDisplay(p.option) : p.option)
  return (
    <ButtonIcon
      variant={buttonVariant.outline}
      iconRight={mdiClose}
      class={"text-sm px-2 py-1"}
      data-value={p.option}
      onMouseDown={(e) => optionRemove2(p)}
      onClick={(e) => optionRemove2(p)}
      title={ct1(t4multiselect.Remove_x, label())}
    >
      {label()}
    </ButtonIcon>
  )
}

function OptionList2(p: {
  valueSignal: SignalObject<string[]>
  getOptions: Accessor<string[]>
  valueDisplay?: (value: string) => string
}) {
  return (
    <>
      <Key each={p.getOptions()} by={(item) => item} fallback={<NoItems2 />}>
        {(item) => <ListOption2 option={item()} valueSignal={p.valueSignal} valueDisplay={p.valueDisplay} />}
      </Key>
    </>
  )
}

function ListOption2(p: Multiselect2OptionState) {
  const label = () => (p.valueDisplay ? p.valueDisplay(p.option) : p.option)
  return (
    <>
      <ButtonIcon
        type="button"
        role="checkbox"
        aria-checked={optionIsSelected2(p)}
        data-state={optionIsSelected2(p)}
        iconRight={optionIsSelected2(p) ? mdiCheck : undefined}
        onClick={(e) => {
          toggleOption2(p)
        }}
        variant={buttonVariant.ghost}
        class={"justify-start"}
      >
        {label()}
      </ButtonIcon>
    </>
  )
}

function toggleOption2(p: Multiselect2OptionState) {
  const hasOption = optionIsSelected2(p)
  if (hasOption) {
    return optionRemove2(p)
  }
  return optionAdd2(p)
}

function optionRemove2(p: Multiselect2OptionState) {
  const newValues = p.valueSignal.get().filter((v) => v !== p.option)
  p.valueSignal.set(newValues)
}

function optionAdd2(p: Multiselect2OptionState) {
  const newValues = [...p.valueSignal.get(), p.option]
  newValues.sort((a, b) => a.localeCompare(b))
  p.valueSignal.set(newValues)
}

function optionIsSelected2(p: Multiselect2OptionState) {
  return p.valueSignal.get().includes(p.option)
}

function NoItems2(p: MayHaveClass = {}) {
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
