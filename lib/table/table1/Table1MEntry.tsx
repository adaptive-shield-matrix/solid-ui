import type { MobileTableClassNames } from "~ui/table/shared/MobileTableClassNames"
import type { TableColumnDef } from "~ui/table/shared/TableColumnDef"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import { classMerge } from "~ui/utils/ui/classMerge"

export type Table1aMEntryProps<T> = {
  row: T
  columns: TableColumnDef<T>[]
  mobileClasses?: MobileTableClassNames
}

export function Table1MEntry<T>(p: Table1aMEntryProps<T>) {
  return (
    <div class={classMerge("flex flex-col flex-wrap gap-2", p.mobileClasses?.entry)}>
      {p.columns.map((header, i) => {
        if (i === 0) return <MobileEntryFirst mobileClasses={p.mobileClasses}>{header.cell(p.row)}</MobileEntryFirst>
        return (
          <MobileEntryOther headerName={header.name} mobileClasses={p.mobileClasses}>
            {header.cell(p.row)}
          </MobileEntryOther>
        )
      })}
    </div>
  )
}

function MobileEntryFirst({ mobileClasses: c, children }: { mobileClasses?: MobileTableClassNames } & HasChildren) {
  return <span class={classMerge("font-semibold", c?.first)}>{children}</span>
}

function MobileEntryOther({
  mobileClasses: c,
  headerName,
  children,
}: { headerName: string; mobileClasses?: MobileTableClassNames } & HasChildren) {
  return (
    <span class={classMerge("flex flex-wrap justify-between", c?.entry)}>
      <span class={classMerge("text-gray-600 dark:text-gray-400", c?.header)}>{`${headerName}:`}</span>
      <span class={classMerge("text-right", c?.other)}>{children}</span>
    </span>
  )
}
