import { splitProps } from "solid-js"
import type { DesktopTableClassNames } from "~/table/shared/DesktopTableClassNames.ts"
import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames.ts"
import { tableVisibilityClasses } from "~/table/shared/tableVisibilityClasses.ts"
import type { Table2Signals } from "~/table/table2/createSortableTableSignals.ts"
import { Table2D } from "~/table/table2/Table2D.tsx"
import { Table2M } from "~/table/table2/Table2M.tsx"
import { type TailwindBreakpoint, tailwindBreakpoint } from "~/utils/ui/tailwindBreakpoint"

export type Table2RProps<T> = Table2Signals<T> & {
  breakpoint?: TailwindBreakpoint
  desktopClasses?: DesktopTableClassNames
  mobileClasses?: MobileTableClassNames
}

export function Table2R<T>(p: Table2RProps<T>) {
  const [, desktopP] = splitProps(p, ["breakpoint", "mobileClasses"])
  const [, mobileP] = splitProps(p, ["breakpoint", "desktopClasses"])
  return (
    <>
      <Table2D<T> {...desktopP} class={tableVisibilityClasses.desktop(p.breakpoint ?? tailwindBreakpoint.sm)} />
      <Table2M<T> {...mobileP} class={tableVisibilityClasses.mobile(p.breakpoint ?? tailwindBreakpoint.sm)} />
    </>
  )
}
