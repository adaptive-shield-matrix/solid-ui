import type { Language } from "~ui/i18n/language"
import { languageSignal } from "~ui/i18n/languageSignal"
import { ttt } from "~ui/i18n/ttt"
import type { TableColumnDef } from "~ui/table/shared/TableColumnDef"
import { Table1R } from "~ui/table/table1/Table1R"
import { createPseudoRandomSec, type PseudoRandom } from "~utils/ran/createPseudoRandom"

export function DemoTable1R() {
  return (
    <Table1R
      rows={generateRows()}
      columns={createTableColumns(languageSignal.get())}
      desktopClasses={{
        data: "px-3 py-2",
      }}
      translate={(en) => ttt(en)}
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

function generateRows(p: PseudoRandom = createPseudoRandomSec(), n = 100): Person[] {
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
