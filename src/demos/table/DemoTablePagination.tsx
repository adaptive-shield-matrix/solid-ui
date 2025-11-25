import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import type { JSXElement } from "solid-js"
import { NumberInputS } from "~ui/input/number/NumberInputS"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { commonHeaderClass } from "~ui/static/text/commonHeaderClass"
import { classMerge } from "~ui/utils/classMerge"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClassAndChildren } from "~ui/utils/MayHaveClassAndChildren"
import type { TablePaginationText } from "./TablePaginationText"
import { tablePaginationTextDefault } from "./TablePaginationText"

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
  texts?: TablePaginationText
}

function AtomizedTablePagination() {
  return (
    <TablePagination entries={entriesSignal} entriesPerPage={entriesPerPageSignal} currentPage={currentPageSignal} />
  )
}

function TablePagination(p: TablePaginationProps) {
  const texts = p.texts ?? tablePaginationTextDefault
  return (
    <div class={"flex flex-wrap justify-center md:justify-between gap-2"}>
      <TablePaginationInfo
        entries={p.entries}
        entriesPerPage={p.entriesPerPage}
        currentPage={p.currentPage}
        texts={texts}
      />
      <TablePaginationButtons3
        entries={p.entries}
        entriesPerPage={p.entriesPerPage}
        currentPage={p.currentPage}
        texts={texts}
      />
    </div>
  )
}

function hasReachedMax(p: TablePaginationProps) {
  return p.currentPage.get() >= Math.floor(p.entries.get() / p.entriesPerPage.get())
}

function TablePaginationButtons3(p: TablePaginationProps & { texts: TablePaginationText }) {
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
        title={p.texts.previousPage}
      />
      <ButtonIcon
        iconRight={mdiChevronRight}
        iconClass={"ml-0.5"}
        variant={"subtle"}
        disabled={hasReachedMax(p)}
        onClick={incr}
      >
        {p.texts.nextPage}
      </ButtonIcon>
    </div>
  )
}
function TablePaginationInfo(p: TablePaginationProps & { texts: TablePaginationText }) {
  return (
    <p class={"flex flex-wrap gap-1 my-auto mx-1"}>
      <L>{p.texts.showing}</L>
      <B>{p.currentPage.get() * p.entriesPerPage.get() + 1}</B>
      <L>{p.texts.to}</L>
      <B>{Math.min((p.currentPage.get() + 1) * p.entriesPerPage.get(), p.entries.get())}</B>
      <L>{p.texts.of}</L>
      <B>{p.entries.get()}</B>
      <L>{p.texts.entries}</L>
    </p>
  )
}

function L(p: MayHaveChildren): JSXElement {
  return <span class={"text-gray-700 dark:text-gray-300"}>{p.children}</span>
}

function B(p: MayHaveChildren): JSXElement {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold "}>{p.children}</span>
}

function H(p: MayHaveClassAndChildren): JSXElement {
  return <div class={classMerge(commonHeaderClass, p.class)}>{p.children}</div>
}
