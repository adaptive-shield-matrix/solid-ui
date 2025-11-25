import { Separator } from "~ui/static/separator/Separator"
import type { MobileTableClassNames } from "~ui/table/shared/MobileTableClassNames"
import type { Table1Data } from "~ui/table/table1/Table1Data"
import { Table1MEntry } from "~ui/table/table1/Table1MEntry"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface Table1aMProps<T> extends Table1Data<T>, MayHaveClass {
  mobileClasses?: MobileTableClassNames
  translate?: (en: string) => string
}

export function Table1M<T>(p: Table1aMProps<T>) {
  return (
    <div class={classMerge("flex flex-col flex-wrap w-full gap-4", p.class, p.mobileClasses?.class)}>
      {p.rows.map((row, y) => (
        <>
          <Separator />
          <Table1MEntry row={row} columns={p.columns} mobileClasses={p.mobileClasses} translate={p.translate} />
        </>
      ))}
    </div>
  )
}
