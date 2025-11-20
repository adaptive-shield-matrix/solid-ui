import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircle } from "@mdi/js"
import { For } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { classesGridCols3xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveButtonVariant } from "~ui/utils/MayHaveButtonVariant"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveDisabled } from "~ui/utils/MayHaveDisabled"
import type { MayHaveId } from "~ui/utils/MayHaveId"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

export interface CheckMultipleProps<T extends string>
  extends MayHaveId,
    MayHaveButtonVariant,
    MayHaveClass,
    MayHaveInnerClass,
    MayHaveDisabled {
  // state
  valueSignal: SignalObject<T[]>
  getOptions: () => T[]
  valueText?: (value: T) => string
  // styling
  optionClass?: string
}

export function CheckMultiple<T extends string = string>(p: CheckMultipleProps<T>) {
  return (
    <div
      id={p.id}
      class={classArr(
        "group border border-input",
        "px-2 py-2",
        "ring-offset-background",
        "rounded-md",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        "flex flex-col justify-center gap-1", // layout
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

interface OptionListProps<T extends string> extends MayHaveButtonVariant, MayHaveDisabled, MayHaveInnerClass {
  valueSignal: SignalObject<T[]>
  getOptions: () => T[]
  valueText?: (value: T) => string
  optionClass?: string
}

function OptionList<T extends string>(p: OptionListProps<T>) {
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

interface CheckOptionProps<T extends string> extends MayHaveButtonVariant, MayHaveDisabled {
  option: T
  valueSignal: SignalObject<T[]>
  valueText?: (value: T) => string
  optionClass?: string
}

function CheckOption<T extends string>(p: CheckOptionProps<T>) {
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
      disabled={p.disabled}
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

function toggleOption<T extends string>(p: CheckOptionProps<T>) {
  const hasOption = p.valueSignal.get().includes(p.option)
  if (hasOption) {
    optionRemove(p)
  } else {
    optionAdd(p)
  }
}

function optionRemove<T extends string>(p: CheckOptionProps<T>) {
  const newValues = p.valueSignal.get().filter((v) => v !== p.option)
  p.valueSignal.set(newValues)
}

function optionAdd<T extends string>(p: CheckOptionProps<T>) {
  const newValues = [...p.valueSignal.get(), p.option]
  newValues.sort((a, b) => a.localeCompare(b))
  p.valueSignal.set(newValues)
}
