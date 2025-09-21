import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames.ts"
import type { TableColumnDef } from "~/table/shared/TableColumnDef.ts"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasChildren } from "~/utils/HasChildren.ts"

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
