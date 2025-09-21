import { For } from "solid-js"
import { languageSignal } from "~/i18n/languageSignal"
import type { DesktopTableClassNames } from "~/table/shared/DesktopTableClassNames.ts"
import { sharedTableRowClassName } from "~/table/shared/sharedTableRowClassName.ts"
import type { TableColumnDef } from "~/table/shared/TableColumnDef.ts"
import type { Table2Signals } from "~/table/table2/createSortableTableSignals.ts"
import { sortData } from "~/table/table2/sortData.ts"
import { nextSortDir } from "~/table/table2/sortDir.ts"
import { Table2DSortButton } from "~/table/table2/Table2DSortButton.tsx"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"

export type SortableTableDProps<T> = Table2Signals<T> & {
  desktopClasses?: DesktopTableClassNames
} & HasClass

//
// table
//

export function Table2D<T>(p: SortableTableDProps<T>) {
  // const l = useAtomValue(languageAtom)
  // const columns = useAtomValue(atoms.columns)
  // const [data, setData] = useAtom(atoms.rows)
  // const [sortDir, setSortDir] = useAtom(atoms.sortDir)
  // const [prevHeader, setPrevHeader] = useAtom(atoms.prevHeader)

  function doSort(sortHeader: TableColumnDef<T>) {
    const nextSortDirState = nextSortDir(p.prevHeader.get(), sortHeader, p.sortDir.get())
    // console.log(prevHeader?.name, "->", sortHeader.name, sortDir, "->", nextSortDirState)
    p.sortDir.set(nextSortDirState)
    p.prevHeader.set(sortHeader)
    const sortedData = sortData<T>(languageSignal.get(), p.rows.get(), sortHeader, p.sortDir.get())
    p.rows.set(sortedData)
  }

  return (
    <table class={classMerge("overflow-x-auto", p.class, p.desktopClasses?.class)}>
      <thead>
        <tr>
          <For each={p.columns.get()}>
            {(h) => (
              <th scope={"col"} class={classMerge("text-left", p.desktopClasses?.header, h.headerClass)}>
                <Table2DSortButton sortHeader={h} onClick={doSort} />
              </th>
            )}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={p.rows.get()}>
          {(d) => (
            <tr class={classMerge(sharedTableRowClassName, p.desktopClasses?.row)}>
              <For each={p.columns.get()}>
                {(h) => <td class={classMerge(p.desktopClasses?.data, h.dataClass)}>{h.cell(d)}</td>}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  )
}
