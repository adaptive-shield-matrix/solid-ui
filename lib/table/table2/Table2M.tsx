import { For } from "solid-js"
import { Separator } from "~ui/static/separator/Separator"
import type { MobileTableClassNames } from "~ui/table/shared/MobileTableClassNames"
import { Table1MEntry } from "~ui/table/table1/Table1MEntry"
import type { Table2Signals } from "~ui/table/table2/createSortableTableSignals"
import type { HasClass } from "~ui/utils/HasClass"
import { classMerge } from "~ui/utils/classMerge"

export type SortableTableMProps<T> = Table2Signals<T> & {
  mobileClasses?: MobileTableClassNames
} & HasClass

export function Table2M<T>(p: SortableTableMProps<T>) {
  return (
    <div class={classMerge("flex flex-col flex-wrap w-full gap-4", p.class, p.mobileClasses?.class)}>
      <For each={p.rows.get()}>
        {(row, i) => (
          <>
            <Separator />
            <Table1MEntry row={row} columns={p.columns.get()} mobileClasses={p.mobileClasses} />
          </>
        )}
      </For>
    </div>
  )
}
