import { For, Match, Switch } from "solid-js"
import { Separator } from "~/static/separator/Separator"
import type { MobileTableClassNames } from "~/table/shared/MobileTableClassNames"
import type { TableColumnDef } from "~/table/shared/TableColumnDef"
import type { HasChildren } from "~/utils/ui/HasChildren"
import { classMerge } from "~/utils/ui/classMerge"

export type Table2MEntryProps<T> = {
  row: T
  columns: TableColumnDef<T>[]
  mobileClasses?: MobileTableClassNames
}

export function Table2MEntry<T>(p: Table2MEntryProps<T>) {
  return (
    <div class={classMerge("flex flex-col flex-wrap gap-2", p.mobileClasses?.entry)}>
      <For each={p.columns}>
        {(header, i) => (
          <>
            <Separator />
            <Switch>
              <Match when={i() === 0}>
                <MobileEntryFirst mobileClasses={p.mobileClasses}>{header.cell(p.row)}</MobileEntryFirst>
              </Match>
              <Match when={i() !== 0}>
                <MobileEntryOther headerName={header.name} mobileClasses={p.mobileClasses}>
                  {header.cell(p.row)}
                </MobileEntryOther>
              </Match>
            </Switch>
          </>
        )}
      </For>
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
