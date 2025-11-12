import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircle } from "@mdi/js"
import { For } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { classesGridCols3xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { HasGetOptions } from "~ui/utils/HasGetOptions"
import type { HasValueSignalString } from "~ui/utils/HasValueSignalString"
import type { MayHaveValueText } from "~ui/utils/HasValueText"
import type { MayHaveButtonVariant } from "~ui/utils/MayHaveButtonVariant"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveDisabled } from "~ui/utils/MayHaveDisabled"
import type { MayHaveId } from "~ui/utils/MayHaveId"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

export interface CheckSingleProps
  extends HasValueSignalString,
    HasGetOptions,
    MayHaveValueText,
    MayHaveId,
    MayHaveButtonVariant,
    MayHaveClass,
    MayHaveInnerClass,
    MayHaveDisabled {
  optionClass?: string
}

export function CheckSingle(p: CheckSingleProps) {
  return (
    <div
      id={p.id}
      class={classMerge(
        "group border border-input",
        "px-2 py-2",
        "ring-offset-background",
        "rounded-md",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        "flex flex-col items-center justify-center gap-1", // layout
        p.class,
      )}
    >
      <OptionList
        valueSignal={p.valueSignal}
        getOptions={p.getOptions}
        valueText={p.valueText}
        variant={p.variant}
        optionClass={p.optionClass}
        innerClass={p.innerClass}
      />
    </div>
  )
}

interface OptionListProps
  extends HasValueSignalString,
    HasGetOptions,
    MayHaveValueText,
    MayHaveButtonVariant,
    MayHaveDisabled,
    MayHaveInnerClass {
  optionClass?: string
}

function OptionList(p: OptionListProps) {
  return (
    <div class={innerClass(p.getOptions().length, p.innerClass)}>
      <For each={p.getOptions()}>
        {(option) => (
          <CheckOption
            option={option}
            valueSignal={p.valueSignal}
            valueText={p.valueText}
            optionClass={p.optionClass}
            variant={p.variant}
            disabled={p.disabled}
          />
        )}
      </For>
    </div>
  )
}

function innerClass(optionAmount: number, innerClass?: string): string {
  if (innerClass) return innerClass
  if (optionAmount <= 0) return ""
  const base = "gap-x-2 gap-y-1"
  if (optionAmount === 1) return classArr("grid grid-cols-1", base)
  if (optionAmount === 2) return classArr("grid grid-cols-2", base)
  return classArr(classesGridCols3xl, base)
}

interface CheckOptionProps extends MayHaveButtonVariant, MayHaveDisabled {
  option: string
  valueSignal: SignalObject<string>
  valueText?: (value: string) => string
  optionClass?: string
}

function CheckOption(p: CheckOptionProps) {
  const label = () => (p.valueText ? p.valueText(p.option) : p.option)
  const isSelected = () => p.valueSignal.get() === p.option

  return (
    <ButtonIcon
      role="option"
      aria-selected={isSelected()}
      icon={isSelected() ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline}
      // iconRight={isSelected() ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline}
      onClick={() => toggleOption(p)}
      variant={p.variant ?? buttonVariant.filled}
      class={classMerge("justify-start text-left", p.optionClass)}
      disabled={p.disabled}
    >
      {label()}
    </ButtonIcon>
  )
}

function toggleOption(p: CheckOptionProps) {
  const isSelected = p.valueSignal.get() === p.option
  if (isSelected) {
    p.valueSignal.set("")
  } else {
    p.valueSignal.set(p.option)
  }
}
