import { mdiArrowDown, mdiArrowUp } from "@mdi/js"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIcon } from "~/interactive/button/ButtonIcon.tsx"
import type { TableColumnDef } from "~/table/shared/TableColumnDef.ts"
import { sortDir, type SortDir } from "~/table/table2/sortDir.ts"
import { classMerge } from "~/utils/classMerge.ts"

export function Table2DSortButton<T>(p: {
  sortHeader: TableColumnDef<T>
  onClick: (sortDir: TableColumnDef<T>) => void
}) {
  return (
    <ButtonIcon
      variant={buttonVariant.ghost}
      onClick={() => p.onClick(p.sortHeader)}
      class={classMerge("w-full justify-start py-2 pl-1 pr-3 rounded-sm", p.sortHeader.headerClass)}
      iconClass={"size-5"}
      // iconRight={sortIcon(h, prevHeader, sortDir)}
      title={p.sortHeader.title}
    >
      {p.sortHeader.name}
    </ButtonIcon>
  )
}

function sortIcon<T>(
  sortHeader: TableColumnDef<T>,
  prevHeader: TableColumnDef<T> | null,
  dir: SortDir,
): string | undefined {
  if (!prevHeader || sortHeader.name !== prevHeader.name) return undefined
  if (dir === sortDir.asc) return mdiArrowUp
  if (dir === sortDir.des) return mdiArrowDown
  return undefined
}
