import { mdiCheck, mdiClose, mdiPlus } from "@mdi/js"
import { Key } from "@solid-primitives/keyed"
import type { Accessor } from "solid-js"
import { createEffect, createSignal, For, mergeProps, onMount } from "solid-js"
import { ct0, ct1 } from "~ui/i18n/ct0"
import { t4multiselect } from "~ui/input/select/t4multiselect"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import type { CorvuPopoverProps } from "~ui/interactive/popover/CorvuPopover"
import { CorvuPopover } from "~ui/interactive/popover/CorvuPopover"
import { classesGridCols3xl } from "~ui/static/container/classesGridCols"
import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import type { SignalObject } from "~ui/utils/createSignalObject"
import type { HasId } from "~ui/utils/HasId"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { MayHaveInnerClass } from "~ui/utils/MayHaveInnerClass"

/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/checkbox/src/Checkbox.tsx
 */
export interface MultiSelectProps extends HasId, MayHaveClass, MayHaveInnerClass, MayHaveChildren {
  buttonProps: CorvuPopoverProps
  textNoEntries?: string
  textAddEntry?: string
  valueSignal: SignalObject<string[]>
  getOptions: Accessor<string[]>
  valueText?: (value: string) => string
  addEntryClass?: string
  noItemsClass?: string
  listOptionClass?: string
}

export function MultiSelect(p: MultiSelectProps) {
  const buttonClass = classMerge(p.addEntryClass, p.buttonProps.class)
  const buttonProps = mergeProps(p.buttonProps, {
    icon: mdiPlus,
    children: p.textAddEntry ?? ct0(t4multiselect.Add_entry),
    class: buttonClass,
  })
  return (
    <div
      id={p.id}
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
      <SelectedValues valueSignal={p.valueSignal} valueText={p.valueText} noItemsClass={p.noItemsClass} />
      <CorvuPopover {...buttonProps}>
        <OptionList
          id={p.id}
          valueSignal={p.valueSignal}
          getOptions={p.getOptions}
          valueText={p.valueText}
          noItemsClass={p.noItemsClass}
          listOptionClass={p.listOptionClass}
          innerClass={p.innerClass}
        />
      </CorvuPopover>
    </div>
  )
}

interface SelectedValuesProps {
  valueSignal: SignalObject<string[]>
  valueText?: (value: string) => string
  noItemsClass?: string
}

function SelectedValues(p: SelectedValuesProps) {
  return (
    <div class={"flex flex-wrap gap-1"} role="list">
      <Key each={p.valueSignal.get()} by={(item) => item} fallback={<NoItems class={p.noItemsClass} />}>
        {(item) => <SelectedValue option={item()} valueSignal={p.valueSignal} valueText={p.valueText} />}
      </Key>
    </div>
  )
}

interface MultiselectOptionState {
  option: string
  valueSignal: SignalObject<string[]>
  valueText?: (value: string) => string
}

interface SelectedValueProps extends MultiselectOptionState {}

function SelectedValue(p: SelectedValueProps) {
  const label = () => (p.valueText ? p.valueText(p.option) : p.option)
  return (
    <ButtonIcon
      role="listitem"
      variant={buttonVariant.filled}
      iconRight={mdiClose}
      class={"text-sm px-2 py-1"}
      data-value={p.option}
      onMouseDown={(e) => optionRemove(p)}
      onClick={(e) => optionRemove(p)}
      title={ct1(t4multiselect.Remove_x, label()) || ""}
    >
      {label()}
    </ButtonIcon>
  )
}

interface OptionListProps extends HasId, MayHaveInnerClass {
  valueSignal: SignalObject<string[]>
  getOptions: Accessor<string[]>
  valueText?: (value: string) => string
  noItemsClass?: string
  listOptionClass?: string
}

function OptionList(p: OptionListProps) {
  const getOptions = p.getOptions
  const options = getOptions()
  const [focusedIndex, setFocusedIndex] = createSignal(-1)

  createEffect(() => {
    const idx = focusedIndex()
    if (idx >= 0) {
      setTimeout(() => {
        const el = document.getElementById(`${p.id}-option-${idx}`)
        el?.focus()
      }, 0)
    }
  })

  onMount(() => {
    if (options.length > 0) {
      setFocusedIndex(0)
    }
  })

  const handleKeyDown = (e: KeyboardEvent) => {
    const opts = getOptions()
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % opts.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + opts.length) % opts.length)
        break
      case "Enter":
      case " ":
        e.preventDefault()
        if (focusedIndex() >= 0) {
          const option = opts[focusedIndex()]!
          toggleOption({ option, valueSignal: p.valueSignal, valueText: p.valueText })
        }
        break
    }
  }

  if (options.length === 0) {
    return <NoItems class={p.noItemsClass} />
  }

  return (
    <div
      role="listbox"
      aria-multiselectable="true"
      onKeyDown={handleKeyDown}
      class={getInnerClass(options.length, p.innerClass)}
    >
      <For each={options}>
        {(option, index) => (
          <ListOption
            id={p.id}
            option={option}
            index={index()}
            focusedIndex={focusedIndex()}
            setFocusedIndex={setFocusedIndex}
            valueSignal={p.valueSignal}
            valueText={p.valueText}
            listOptionClass={p.listOptionClass}
          />
        )}
      </For>
    </div>
  )
}

function getInnerClass(optionAmount: number, innerClass?: string): string {
  if (innerClass) return innerClass
  if (optionAmount <= 0) return ""
  const base = " gap-x-2 gap-y-1"
  if (optionAmount <= 5) return "grid grid-cols-1" + base
  if (optionAmount <= 9) return "grid grid-cols-2" + base
  if (optionAmount > 9) return classesGridCols3xl + base
  return ""
}

interface ListOptionProps extends HasId, MultiselectOptionState {
  index: number
  focusedIndex: number
  setFocusedIndex: (v: number) => void
  listOptionClass?: string
}

function ListOption(p: ListOptionProps) {
  const label = () => (p.valueText ? p.valueText(p.option) : p.option)
  return (
    <ButtonIcon
      id={`${p.id}-option-${p.index}`}
      tabIndex={p.focusedIndex === p.index ? 0 : -1}
      role="option"
      aria-selected={optionIsSelected(p)}
      iconRight={optionIsSelected(p) ? mdiCheck : undefined}
      onClick={() => {
        toggleOption(p)
        p.setFocusedIndex(p.index)
      }}
      variant={buttonVariant.ghost}
      class={classMerge("justify-start", p.focusedIndex === p.index ? "ring-2 ring-blue-500" : "", p.listOptionClass)}
    >
      {label()}
    </ButtonIcon>
  )
}

function toggleOption(p: MultiselectOptionState) {
  const hasOption = optionIsSelected(p)
  if (hasOption) {
    return optionRemove(p)
  }
  return optionAdd(p)
}

function optionRemove(p: MultiselectOptionState) {
  const newValues = p.valueSignal.get().filter((v) => v !== p.option)
  p.valueSignal.set(newValues)
}

function optionAdd(p: MultiselectOptionState) {
  const newValues = [...p.valueSignal.get(), p.option]
  newValues.sort((a, b) => a.localeCompare(b))
  p.valueSignal.set(newValues)
}

function optionIsSelected(p: MultiselectOptionState) {
  return p.valueSignal.get().includes(p.option)
}

interface NoItemsProps extends MayHaveClass {}

function NoItems(p: NoItemsProps) {
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
