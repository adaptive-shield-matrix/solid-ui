import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircle } from "@mdi/js"
import { For } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { classesGridCols3xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { HasGetOptions } from "~ui/utils/HasGetOptions"
import type { HasValueSignalStringArray } from "~ui/utils/HasValueSignalStringArray"
import type { MayHaveValueText } from "~ui/utils/HasValueText"
import type { MayHaveButtonVariant } from "~ui/utils/MayHaveButtonVariant"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveId } from "~ui/utils/MayHaveId"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

export interface CheckMultipleProps
  extends HasValueSignalStringArray,
    HasGetOptions,
    MayHaveValueText,
    MayHaveId,
    MayHaveButtonVariant,
    MayHaveClass,
    MayHaveInnerClass {
  // styling
  optionClass?: string
}

export function CheckMultiple(p: CheckMultipleProps) {
  return (
    <div
      id={p.id}
      class={classArr(
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
  extends HasValueSignalStringArray,
    HasGetOptions,
    MayHaveValueText,
    MayHaveButtonVariant,
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
          />
        )}
      </For>
    </div>
  )
}

interface CheckOptionProps extends MayHaveButtonVariant {
  option: string
  valueSignal: SignalObject<string[]>
  valueText?: (value: string) => string
  optionClass?: string
}

function CheckOption(p: CheckOptionProps) {
  const label = () => (p.valueText ? p.valueText(p.option) : p.option)
  const isSelected = () => p.valueSignal.get().includes(p.option)

  return (
    <ButtonIcon
      role="option"
      aria-selected={isSelected()}
      icon={isSelected() ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline}
      // iconRight={isSelected() ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline}
      onClick={() => toggleOption(p)}
      variant={p.variant ?? buttonVariant.filled}
      class={classMerge("justify-start text-left", p.optionClass)}
    >
      {label()}
    </ButtonIcon>
  )
}

function innerClass(optionAmount: number, innerClass?: string): string {
  if (innerClass) return innerClass
  if (optionAmount <= 0) return ""
  const base = "gap-x-2 gap-y-1"
  if (optionAmount <= 5) return classArr("grid grid-cols-1", base)
  if (optionAmount <= 9) return classArr("grid grid-cols-2", base)
  return classArr(classesGridCols3xl, base)
}

function toggleOption(p: CheckOptionProps) {
  const hasOption = p.valueSignal.get().includes(p.option)
  if (hasOption) {
    optionRemove(p)
  } else {
    optionAdd(p)
  }
}

function optionRemove(p: CheckOptionProps) {
  const newValues = p.valueSignal.get().filter((v) => v !== p.option)
  p.valueSignal.set(newValues)
}

function optionAdd(p: CheckOptionProps) {
  const newValues = [...p.valueSignal.get(), p.option]
  newValues.sort((a, b) => a.localeCompare(b))
  p.valueSignal.set(newValues)
}
