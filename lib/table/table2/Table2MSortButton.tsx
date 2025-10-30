import type { SortableTableData } from "~ui/table/table2/SortableTableData"
import { type SortDir } from "~ui/table/table2/sortDir"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface Table2MSortButtonProps<T> extends SortableTableData<T>, MayHaveClass {}

export function Table2MSortButton<T>(p: Table2MSortButtonProps<T>) {
  // console.log("MobileSortButton", current)
  function update(v: string) {
    const [h, dir] = v.split(";")
    p.atoms.sortDir.set(dir as SortDir)
    const header = p.atoms.columns.get().find((hh) => hh.name === h)
    if (header) p.atoms.prevHeader.set(header)
  }
  // icon={mdiSort}
  return (
    /*
    <DropdownMenu>
      <DropdownMenuTrigger2 variant={buttonVariant.ghost}>{ct0(t4table.Sort)}</DropdownMenuTrigger2>
      <DropdownMenuContent>
        <DropdownMenuLabel>{ct0(t4table.Sort_entries)}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={`${p.atoms.prevHeader.get()?.id ?? "empty"};${p.atoms.sortDir.get()}`}
          onChange={update}
        >
          <For each={p.atoms.columns.get()}>
            {(c) => (
              <>
                {sortDirValues.map((s) => {
                  const v = `${c.name};${s}`
                  const display = `${c.name} - ${ct0(t4table[s])}`
                  return <DropdownMenuRadioItem value={v}>{display}</DropdownMenuRadioItem>
                })}
              </>
            )}
          </For>
          <DropdownMenuRadioItem value="main">main</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="develop">develop</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  */
    null
  )
}
