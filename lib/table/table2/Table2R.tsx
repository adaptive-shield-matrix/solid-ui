import { splitProps } from "solid-js"
import type { DesktopTableClassNames } from "~ui/table/shared/DesktopTableClassNames"
import type { MobileTableClassNames } from "~ui/table/shared/MobileTableClassNames"
import { tableVisibilityClasses } from "~ui/table/shared/tableVisibilityClasses"
import type { Table2Signals } from "~ui/table/table2/createSortableTableSignals"
import { Table2D } from "~ui/table/table2/Table2D"
import { Table2M } from "~ui/table/table2/Table2M"
import { type TailwindBreakpoint, tailwindBreakpoint } from "~ui/utils/ui/tailwindBreakpoint"

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
