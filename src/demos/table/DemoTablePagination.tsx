import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import { ct0 } from "~ui/i18n/ct0.ts"
import { NumberInputS } from "~ui/input/number/NumberInputS.tsx"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon.tsx"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly.tsx"
import { commonHeaderClass } from "~ui/static/text/commonHeaderClass.ts"
import { t4tablePagination } from "~ui/table/table3/pagination/t4tablePagination.ts"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import type { HasClass } from "~ui/utils/ui/HasClass"
import { classMerge } from "~ui/utils/ui/classMerge"
import { createSignalObject, type SignalObject } from "~ui/utils/ui/createSignalObject"

export function DemoTablePagination() {
  const entriesId = "entries"
  const entriesPerPageId = "entriesPerPage"
  const currentPageId = "currentPage"
  return (
    <>
      <div class={"grid grid-cols-[max-content_1fr_max-content] gap-2"}>
        <H>entries</H>
        <label for={entriesId}>entries</label>
        <NumberInputS
          id={entriesId}
          valueSignal={entriesSignal}
          min={0}
          max={1_000}
          incrDecrAmount={10}
          incrDecrAmountMajor={100}
        />
        <label for={entriesPerPageId}>entries per page</label>
        <NumberInputS id={entriesPerPageId} valueSignal={entriesPerPageSignal} min={0} max={100} />
        <label for={currentPageId}>current page</label>
        <NumberInputS id={currentPageId} valueSignal={currentPageSignal} min={0} max={100} />
      </div>
      <AtomizedTablePagination />
    </>
  )
}

const entriesSignal = createSignalObject(36)
const entriesPerPageSignal = createSignalObject(10)
const currentPageSignal = createSignalObject(1)

export type TablePaginationProps = {
  entries: SignalObject<number>
  entriesPerPage: SignalObject<number>
  currentPage: SignalObject<number>
}

function AtomizedTablePagination() {
  return (
    <TablePagination entries={entriesSignal} entriesPerPage={entriesPerPageSignal} currentPage={currentPageSignal} />
  )
}

function TablePagination(p: TablePaginationProps) {
  return (
    <div class={"flex flex-wrap justify-center md:justify-between gap-2"}>
      <TablePaginationInfo entries={p.entries} entriesPerPage={p.entriesPerPage} currentPage={p.currentPage} />
      <TablePaginationButtons3 entries={p.entries} entriesPerPage={p.entriesPerPage} currentPage={p.currentPage} />
    </div>
  )
}

function hasReachedMax(p: TablePaginationProps) {
  return p.currentPage.get() >= Math.floor(p.entries.get() / p.entriesPerPage.get())
}

function TablePaginationButtons3(p: TablePaginationProps) {
  function decr() {
    const next = Math.max(0, p.currentPage.get() - 1)
    p.currentPage.set(next)
  }
  function incr() {
    const maxPage = Math.floor(p.entries.get() / p.entriesPerPage.get())
    const next = Math.min(maxPage, p.currentPage.get() + 1)
    p.currentPage.set(next)
  }
  return (
    <div class={"flex flex-wrap gap-1 mx-1"}>
      <ButtonIconOnly
        icon={mdiChevronLeft}
        iconClass={"mr-0.5"}
        variant={"subtle"}
        disabled={p.currentPage.get() <= 0}
        onClick={decr}
        title={ct0(t4tablePagination.Previous_page)}
      />
      <ButtonIcon
        iconRight={mdiChevronRight}
        iconClass={"ml-0.5"}
        variant={"subtle"}
        disabled={hasReachedMax(p)}
        onClick={incr}
      >
        {ct0(t4tablePagination.Next_page)}
      </ButtonIcon>
    </div>
  )
}
function TablePaginationInfo(p: TablePaginationProps) {
  return (
    <p class={"flex flex-wrap gap-1 my-auto mx-1"}>
      <L>{ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_1)}</L>
      <B>{p.currentPage.get() * p.entriesPerPage.get() + 1}</B>
      <L>{ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_2)}</L>
      <B>{Math.min((p.currentPage.get() + 1) * p.entriesPerPage.get(), p.entries.get())}</B>
      <L>{ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_3)}</L>
      <B>{p.entries.get()}</B>
      <L>{ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_4)}</L>
    </p>
  )
}

function L({ children }: HasChildren) {
  return <span class={"text-gray-700 dark:text-gray-300"}>{children}</span>
}

function B({ children }: HasChildren) {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold "}>{children}</span>
}

function H(p: HasChildren & HasClass) {
  return <div class={classMerge(commonHeaderClass, p.class)}>{p.children}</div>
}
