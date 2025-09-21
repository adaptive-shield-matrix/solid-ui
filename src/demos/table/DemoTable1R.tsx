import type { Language } from "~/i18n/language.ts"
import { languageSignal } from "~/i18n/languageSignal"
import { ttt } from "~/i18n/ttt.ts"
import type { TableColumnDef } from "~/table/shared/TableColumnDef.ts"
import { Table1R } from "~/table/table1/Table1R.tsx"
import type { PseudoRandom } from "~/utils/ran/createPseudoRandom.ts"
import { pseudoRandomSignal } from "~/utils/ran/pseudoRandomSignal"

export function DemoTable1R() {
  return (
    <Table1R
      rows={generateRows(pseudoRandomSignal.get())}
      columns={createTableColumns(languageSignal.get())}
      desktopClasses={{
        data: "px-3 py-2",
      }}
    />
  )
}

type TableId = (typeof tableId)[keyof typeof tableId]

const tableId = {
  id: "id",
  name: "name",
} as const

type Person = {
  id: string
  name: string
}

function createTableColumns(l: Language): TableColumnDef<Person>[] {
  type D = Person
  const headers: TableColumnDef<D>[] = [
    {
      id: tableId.id,
      name: ttt("Id"),
      data: (d: D) => d.id,
      cell: (d: D) => d.id,
    },
    {
      id: tableId.name,
      name: ttt("Name"),
      data: (d: D) => d.name,
      cell: (d: D) => d.name,
    },
  ]
  return headers
}

function generateRows(p: PseudoRandom, n = 100): Person[] {
  return Array.from({ length: n }, () => generatePerson(p))
}
function generatePerson(p: PseudoRandom): Person {
  const l = 20
  const s = p.string(l)
  return {
    id: s,
    name: s,
  }
}
