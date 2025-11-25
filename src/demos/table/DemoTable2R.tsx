import { mdiMagicStaff, mdiTrashCan } from "@mdi/js"
import { ttt } from "~ui/i18n/ttt"
import { formModeIcon } from "~ui/input/form/formModeIcon"
import { InputS } from "~ui/input/input/InputS"
import { Button } from "~ui/interactive/button/Button"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { NativeDialog } from "~ui/interactive/dialog/NativeDialog"
import type { TableColumnDef } from "~ui/table/shared/TableColumnDef"
import { createTable2Signals } from "~ui/table/table2/createSortableTableSignals"
import { Table2R } from "~ui/table/table2/Table2R"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { createPseudoRandomSec, type PseudoRandom } from "~utils/ran/createPseudoRandom"

export function DemoTable2R() {
  return (
    <>
      <ButtonIcon variant={buttonVariant.ghost} icon={formModeIcon.add} onClick={addData}>
        Add entry
      </ButtonIcon>
      <ButtonIcon variant={buttonVariant.ghost} icon={mdiMagicStaff} onClick={regenerateData}>
        Re-Generate
      </ButtonIcon>
      <Table2R
        {...state}
        desktopClasses={{
          data: "px-3 py-2",
        }}
        translate={(en) => ttt(en)}
      />
    </>
  )
}

type TableId = (typeof tableId)[keyof typeof tableId]

const tableId = {
  id: "id",
  name: "name",
  action: "action",
} as const

let count = 0

type Person = {
  id: string
  name: string
}

const pseudoRandom = createPseudoRandomSec()
const rows = createSignalObject(generateRows(pseudoRandom))
const columns = createSignalObject(createTableColumns())
const state = createTable2Signals({ rows, columns })

function createTableColumns(): TableColumnDef<Person>[] {
  type D = Person
  function deleteData(d: D) {
    console.log("delete", d)
    const newData = rows.get().filter((r) => r.id !== d.id)
    rows.set(newData)
  }
  const headers: TableColumnDef<D>[] = [
    {
      id: tableId.id,
      name: "Id",
      data: (d: D) => d.id,
      cell: (d: D) => d.id,
    },
    {
      id: tableId.name,
      name: "Name",
      data: (d: D) => d.name,
      cell: (d: D) => d.name,
    },
    {
      id: tableId.action,
      name: "Action",
      cell: (d: D) => <Actions d={d} />,
    },
  ]
  return headers
}

function deleteData(d: Person) {
  console.log("delete", d)
  const newData = rows.get().filter((r) => r.id !== d.id)
  rows.set(newData)
}

function Actions(p: { d: Person }) {
  console.log("rendered Actions for", p.d.id)
  return (
    <>
      <ButtonIconOnly
        variant={buttonVariant.ghost}
        icon={mdiTrashCan}
        title={"delete"}
        onClick={() => deleteData(p.d)}
      />
      <EditDialog d={p.d} />
    </>
  )
}

function addData() {
  const newPerson = generatePerson(count++, pseudoRandom)
  let newRows: Person[] = [...rows.get(), newPerson]
  rows.set(newRows)
}
function regenerateData() {
  let newRows: Person[] = generateRows(pseudoRandom)
  rows.set(newRows)
}

function generateRows(p: PseudoRandom = pseudoRandom, n = 10): Person[] {
  return Array.from({ length: n }, () => generatePerson(count++, p))
}
function generatePerson(i: number, p: PseudoRandom): Person {
  const l = 20
  const s = p.string(l)
  return {
    id: i.toString(),
    name: s,
  }
}

const formState = {
  openId: createSignalObject(""),
  id: createSignalObject(""),
  name: createSignalObject(""),
}

function updateFormState(p: Person) {
  formState.openId.set(p.id)
  formState.id.set(p.id)
  formState.name.set(p.name)
}

function updateTableState() {
  const prevId = formState.openId.get()
  const id = formState.id.get()
  const name = formState.name.get()

  let newRows: Person[] = rows.get().map((r) => {
    if (r.id === prevId) {
      return { ...r, id, name }
    }
    return r
  })
  rows.set(newRows)
}

function EditDialog(p: { d: Person }) {
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log("submit")
    updateTableState()
  }
  return (
    <NativeDialog
      buttonProps={{
        icon: formModeIcon.edit,
        variant: buttonVariant.ghost,
        title: "Edit",
        onClick: () => updateFormState(p.d),
      }}
      title={"Edit profile"}
      description={"Make changes to your profile here. Click save when you're done."}
    >
      <form onSubmit={onSubmit}>
        <label for={"id"} class={"grid w-full max-w-sm items-center gap-1.5"}>
          <span>Email</span>
          <InputS type={"number"} id={"id"} placeholder={"Id"} valueSignal={formState.id} />
        </label>
        <label for={"name"} class={"grid w-full max-w-sm items-center gap-1.5"}>
          <span>Email</span>
          <InputS type={"text"} id={"name"} placeholder={"Name"} valueSignal={formState.name} />
        </label>
        <Button type="submit">Save changes</Button>
      </form>
    </NativeDialog>
  )
}
