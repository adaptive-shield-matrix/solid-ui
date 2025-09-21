import type { Table2Signals } from "~/table/table2/createSortableTableSignals.ts"

export type SortableTableData<T> = {
  atoms: Table2Signals<T>
}
