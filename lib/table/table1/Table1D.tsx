import { languageSignal } from "~ui/i18n/languageSignal"
import { tt0 } from "~ui/i18n/t1"
import type { DesktopTableClassNames } from "~ui/table/shared/DesktopTableClassNames"
import { sharedTableRowClassName } from "~ui/table/shared/sharedTableRowClassName"
import { t4table } from "~ui/table/shared/t4table"
import type { Table1Data } from "~ui/table/table1/Table1Data"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface Table1aDProps<T> extends Table1Data<T>, MayHaveClass {
  desktopClasses?: DesktopTableClassNames
}

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
