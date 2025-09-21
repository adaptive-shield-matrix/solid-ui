import { languageSignal } from "~/i18n/languageSignal"
import { tt0 } from "~/i18n/t1.ts"
import type { DesktopTableClassNames } from "~/table/shared/DesktopTableClassNames.ts"
import { sharedTableRowClassName } from "~/table/shared/sharedTableRowClassName.ts"
import { t4table } from "~/table/shared/t4table.ts"
import type { Table1Data } from "~/table/table1/Table1Data.ts"
import type { HasClass } from "~/utils/ui/HasClass"
import { classMerge } from "~/utils/ui/classMerge"

export type Table1aDProps<T> = Table1Data<T> & {
  desktopClasses?: DesktopTableClassNames
} & HasClass

export function Table1D<T>(p: Table1aDProps<T>) {
  if (p.rows.length <= 0)
    return <span class={"text-lg text-center p-2 pt-6"}>{tt0(languageSignal.get(), t4table.No_entries)}</span>
  return (
    <table class={classMerge("overflow-x-auto", p.class, p.desktopClasses?.class)}>
      <thead>
        <tr>
          {p.columns.map((h, i) => (
            <th
              scope="col"
              class={classMerge("text-left", "px-4 py-2", p.desktopClasses?.header, h.headerClass)}
              title={h.title}
            >
              {h.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {p.rows.map((d, y) => (
          <tr class={classMerge(sharedTableRowClassName, p.desktopClasses?.row)}>
            {p.columns.map((h) => {
              return <td class={classMerge(p.desktopClasses?.data, h.dataClass)}>{h.cell(d)}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
