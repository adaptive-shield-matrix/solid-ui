import { Separator } from "~ui/static/separator/Separator"
import type { MobileTableClassNames } from "~ui/table/shared/MobileTableClassNames"
import type { Table1Data } from "~ui/table/table1/Table1Data"
import { Table1MEntry } from "~ui/table/table1/Table1MEntry"
import type { HasClass } from "~ui/utils/HasClass"
import { classMerge } from "~ui/utils/classMerge"

export type Table1aMProps<T> = Table1Data<T> & {
  mobileClasses?: MobileTableClassNames
} & HasClass

export function Table1M<T>(p: Table1aMProps<T>) {
  return (
    <div class={classMerge("flex flex-col flex-wrap w-full gap-4", p.class, p.mobileClasses?.class)}>
      {p.rows.map((row, y) => (
        <>
          <Separator />
          <Table1MEntry row={row} columns={p.columns} mobileClasses={p.mobileClasses} />
        </>
      ))}
    </div>
  )
}
