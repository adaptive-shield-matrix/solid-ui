import type { DesktopTableClassNames } from "~/table/shared/DesktopTableClassNames"
import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames"
import { tableVisibilityClasses } from "~/table/shared/tableVisibilityClasses"
import { Table1D } from "~/table/table1/Table1D"
import type { Table1Data } from "~/table/table1/Table1Data"
import { Table1M } from "~/table/table1/Table1M"
import type { TailwindBreakpoint } from "~/utils/ui/tailwindBreakpoint"
import { tailwindBreakpoint } from "~/utils/ui/tailwindBreakpoint"

export type SortableTable1RProps<T> = Table1Data<T> & {
  breakpoint?: TailwindBreakpoint
  desktopClasses?: DesktopTableClassNames
  mobileClasses?: MobileTableClassNames
}

export function Table1R<T>(p: SortableTable1RProps<T>) {
  return (
    <>
      <Table1D
        rows={p.rows}
        columns={p.columns}
        class={tableVisibilityClasses.desktop(p.breakpoint ?? tailwindBreakpoint.sm)}
        desktopClasses={p.desktopClasses}
      />
      <Table1M
        rows={p.rows}
        columns={p.columns}
        class={tableVisibilityClasses.mobile(p.breakpoint ?? tailwindBreakpoint.sm)}
        mobileClasses={p.mobileClasses}
      />
    </>
  )
}
