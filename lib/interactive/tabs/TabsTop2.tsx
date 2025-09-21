import { Key } from "@solid-primitives/keyed"
import { createUniqueId } from "solid-js"
import { ct0 } from "~/i18n/ct0.ts"
import { t4multiselect } from "~/input/select/t4multiselect.ts"
import type { TabItem } from "~/interactive/tabs/TabItem.tsx"
import { classArr } from "~/utils/classArr.ts"
import type { SignalObject } from "~/utils/createSignalObject.ts"
import type { HasChildren } from "~/utils/HasChildren.ts"
import type { HasClass } from "~/utils/HasClass"
import { type HasDisabled, isDisabled } from "~/utils/HasDisabled.ts"
import type { HasGetOptions } from "~/utils/HasGetOptions.tsx"
import type { ValueOrAccessor } from "~/utils/ValueOrAccessor.tsx"

/**
 * https://www.radix-ui.com/primitives/docs/components/tabs
 * https://github.com/radix-ui/primitives/blob/main/packages/react/tabs/src/Tabs.tsx
 **/
export type TabsTop2Props<T extends string = string> = {
  id?: string
  disabled?: ValueOrAccessor<boolean>
} & HasClass &
  HasChildren &
  HasValueSignalProp<T> &
  HasGetOptions<T> &
  HasDisabled

type HasValueSignalProp<T extends string = string> = {
  valueSignal: SignalObject<TabItem<T>>
}

export function TabsTop2<T extends string = string>(p: TabsTop2Props<T>) {
  const baseId = createUniqueId()
  return (
    <>
      <div
        id={p.id}
        role="tablist"
        data-disabled={isDisabled(p)}
        class={classArr(
          "flex flex-wrap gap-2",
          // "grid gap-2 rounded-md p-2",
          "bg-white dark:bg-black", // bg
          "border border-slate-200 dark:border-slate-700", // border
          p.class,
        )}
      >
        <Key each={p.getOptions()} by={(item) => item.value} fallback={<NoTabOptions />}>
          {(item) => <TabOption baseId={baseId} item={item()} valueSignal={p.valueSignal} disabled={p.disabled} />}
        </Key>
      </div>
      <div>
        <Key each={p.getOptions()} by={(item) => item.value} fallback={<NoTabOptions />}>
          {(item) => <TabContent baseId={baseId} item={item()} valueSignal={p.valueSignal} disabled={p.disabled} />}
        </Key>
      </div>
    </>
  )
}

function NoTabOptions(p: HasClass) {
  return <div class={p.class}>{ct0(t4multiselect.No_entries)}</div>
}

function TabOption<T extends string = string>(
  p: { baseId: string; item: TabItem<T> } & HasValueSignalProp<T> & HasDisabled & HasClass,
) {
  // console.log("TabOption", p.item.value, "value:", p.valueSignal.get())
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected(p)}
      id={makeTriggerId(p.baseId, p.item)}
      aria-controls={makeContentId(p.baseId, p.item)}
      data-state={isSelected(p) ? "active" : "inactive"}
      data-disabled={isDisabled(p) || isDisabled(p.item)}
      disabled={isDisabled(p) || isDisabled(p.item)}
      class={classArr(
        // "block",
        "cursor-pointer select-none",
        "rounded-sm",
        "px-3 py-2 text-center",
        isSelected(p) ? "bg-blue-500 text-white" : "hover:bg-slate-50 dark:hover:bg-slate-900", // bg hover
        "flex gap-2",
        p.class,
      )}
      onClick={(e) => setActiveTab(p)}
    >
      {getText(p)}
    </button>
  )
}

function TabContent<T extends string = string>(
  p: { baseId: string; item: TabItem<T> } & HasValueSignalProp<T> & HasDisabled & HasClass,
) {
  return (
    <div
      id={makeContentId(p.baseId, p.item)}
      role="tabpanel"
      data-state={isSelected(p) ? "active" : "inactive"}
      aria-labelledby={makeTriggerId(p.baseId, p.item)}
      hidden={!isSelected(p)}
      tabIndex={0}
      class={classArr("")}
    >
      {p.item.children}
    </div>
  )
}

function makeTriggerId<T extends string = string>(baseId: string, item: TabItem<T>) {
  return `${baseId}-${item.value}-trigger`
}

function makeContentId<T extends string = string>(baseId: string, item: TabItem<T>) {
  return `${baseId}-${item.value}-content`
}

function setActiveTab<T extends string = string>(p: OptionProps<T>) {
  let prev = p.valueSignal.get()
  // console.log("setActiveTab", p.item.value, "prev:", prev)
  if (prev === p.item) return
  p.valueSignal.set(p.item)
}

type OptionProps<T extends string = string> = {
  item: TabItem<T>
} & HasValueSignalProp<T>

function isSelected<T extends string = string>(p: OptionProps<T>) {
  return p.item.value === p.valueSignal.get()?.value
}

function getText<T extends string = string>(p: OptionProps<T>): string {
  const amount = p.item.amount?.()
  if (!amount) return p.item.label
  return `${p.item.label} (${amount})`
}
