import { For } from "solid-js"
import { languageSignal } from "~ui/i18n/languageSignal"
import type { TranslationBlock } from "~ui/i18n/TranslationBlock"
import { ttl } from "~ui/i18n/ttl"
import type { DesktopTableClassNames } from "~ui/table/shared/DesktopTableClassNames"
import { sharedTableRowClassName } from "~ui/table/shared/sharedTableRowClassName"
import type { TableColumnDef } from "~ui/table/shared/TableColumnDef"
import type { Table2Signals } from "~ui/table/table2/createSortableTableSignals"
import { sortData } from "~ui/table/table2/sortData"
import { nextSortDir } from "~ui/table/table2/sortDir"
import { Table2DSortButton } from "~ui/table/table2/Table2DSortButton"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface SortableTableDProps<T> extends Table2Signals<T>, MayHaveClass {
  desktopClasses?: DesktopTableClassNames
  translate?: (en: string) => string
}

//
// table
//

export function Table2D<T>(p: SortableTableDProps<T>) {
  // const l = useAtomValue(languageAtom)
  // const columns = useAtomValue(atoms.columns)
  // const [data, setData] = useAtom(atoms.rows)
  // const [sortDir, setSortDir] = useAtom(atoms.sortDir)
  // const [prevHeader, setPrevHeader] = useAtom(atoms.prevHeader)

  function tl(b: TranslationBlock): string {
    if (p.translate) {
      return p.translate(b.en)
    }
    return ttl(b)
  }

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
