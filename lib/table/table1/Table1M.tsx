import { Separator } from "~/static/separator/Separator"
import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames.ts"
import type { Table1Data } from "~/table/table1/Table1Data.ts"
import { Table1MEntry } from "~/table/table1/Table1MEntry.tsx"
import { classMerge } from "~/utils/classMerge.ts"
import type { HasClass } from "~/utils/HasClass"

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
