import { For } from "solid-js"
import { Separator } from "~/static/separator/Separator"
import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames.ts"
import { Table1MEntry } from "~/table/table1/Table1MEntry.tsx"
import type { Table2Signals } from "~/table/table2/createSortableTableSignals.ts"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"

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
