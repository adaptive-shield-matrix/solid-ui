import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import { createEffect, Show } from "solid-js"
import { ct0 } from "~ui/i18n/ct0"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { t4tablePagination } from "~ui/table/table3/pagination/t4tablePagination"
import { classMerge } from "~ui/utils/classMerge"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"
import type { HasChildren } from "~ui/utils/HasChildren"
import type { HasClass } from "~ui/utils/HasClass"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface AtomizedTablePaginationProps extends MayHaveClass {
  entriesPerPage: number
  entriesSignal: SignalObject<number>
  currentPageSignal: SignalObject<number>
  incrementPage: () => void
  decrementPage: () => void
}

export function DemoTablePagination2() {
  const entriesPerPage = 10
  const entriesSignal = createSignalObject(0)
  const currentPageSignal = createSignalObject(0)
  function incrementPage() {
    currentPageSignal.set(currentPageSignal.get() + 1)
  }
  function decrementPage() {
    currentPageSignal.set(currentPageSignal.get() + 1)
  }
  const p: AtomizedTablePaginationProps = {
    entriesPerPage,
    entriesSignal,
    currentPageSignal,
    incrementPage,
    decrementPage,
  }
  return (
    <div class={classMerge("flex flex-wrap justify-center md:justify-between py-1 pl-3 gap-2", p.class)}>
      <TablePaginationInfo {...p} />
      <TablePaginationButtons {...p} />
      <TablePaginationButtonShortcuts {...p} />
    </div>
  )
}

function TablePaginationInfo(p: AtomizedTablePaginationProps & HasClass) {
  return (
    <Show when={p.entriesSignal.get() > 0 && p.entriesSignal.get() > p.entriesPerPage}>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{ct0(t4tablePagination.Page)}</T>
        <A>{p.currentPageSignal.get() + 1}</A>
        <T>{"/"}</T>
        <A>{Math.ceil(p.entriesSignal.get() / p.entriesPerPage)}</A>
      </p>
    </Show>
  )
}

function TablePaginationInfo2(p: AtomizedTablePaginationProps & HasClass) {
  const entries = p.entriesSignal.get()
  const currentPage = p.currentPageSignal.get()

  if (entries <= 0) return null
  if (entries <= p.entriesPerPage) return null
  const totalPages = Math.ceil(entries / p.entriesPerPage)

  const text1 = ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_1)
  const from = entries > p.entriesPerPage ? currentPage * p.entriesPerPage + 1 : 1
  const text2 = ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_2)
  const to = Math.min((currentPage + 1) * p.entriesPerPage, entries)
  const text3 = ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_3)
  const total = entries
  const text4 = ct0(t4tablePagination.Showing_x1_to_x2_of_x3_entries_4)

  return (
    <div>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{ct0(t4tablePagination.Page)}</T>
        <B>{currentPage + 1}</B>
        <T>{"/"}</T>
        <A>{totalPages}</A>
      </p>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{text1}</T>
        <A>{from}</A>
        <T>{text2}</T>
        <A>{to}</A>
        <T>{text3}</T>
        <A>{total}</A>
        <T>{text4}</T>
      </p>
    </div>
  )
}

function T({ children }: HasChildren) {
  return <span class={"text-gray-700 dark:text-gray-300"}>{children}</span>
}

function A({ children }: HasChildren) {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold "}>{children}</span>
}

function B({ children }: HasChildren) {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold text-blue-500 dark:text-blue-800"}>{children}</span>
}

function TablePaginationButtons(p: AtomizedTablePaginationProps & HasClass) {
  // const l = useAtomValue(languageAtom)
  // const entries = useAtomValue(entriesAtom)
  // const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
  // const decr = useSetAtom(decrementPage)
  // const incr = useSetAtom(incrementPage)

  if (p.entriesSignal.get() <= p.entriesPerPage) return null

  return (
    <Show when={p.entriesSignal.get() > p.entriesPerPage}>
      <div class={classMerge("flex flex-wrap gap-1 mx-1", p.class)}>
        <ButtonIcon
          icon={mdiChevronLeft}
          iconClass={"mr-0.5"}
          variant={buttonVariant.subtle}
          disabled={p.currentPageSignal.get() <= 0}
          onClick={p.decrementPage}
          title={ct0(t4tablePagination.Previous_page_with_shortcut)}
        >
          {ct0(t4tablePagination.Previous_page)}
        </ButtonIcon>
        <ButtonIcon
          iconRight={mdiChevronRight}
          iconClass={"ml-0.5"}
          variant={buttonVariant.subtle}
          disabled={p.currentPageSignal.get() >= Math.floor(p.entriesSignal.get() / p.entriesPerPage)}
          onClick={p.incrementPage}
          title={ct0(t4tablePagination.Next_page_with_shortcut)}
        >
          {ct0(t4tablePagination.Next_page)}
        </ButtonIcon>
      </div>
    </Show>
  )
}

function TablePaginationButtonShortcuts(p: AtomizedTablePaginationProps) {
  createEffect(() => {
    function hotkeyPress(e: KeyboardEvent) {
      // console.log(e.key, e.ctrlKey ? "ctrl" : "", e.metaKey ? "meta" : "")
      if (e.key === "ArrowLeft" && (e.ctrlKey || e.metaKey)) {
        // console.log("<-")
        p.decrementPage
        return
      }
      if (e.key === "ArrowRight" && (e.ctrlKey || e.metaKey)) {
        // console.log("->")
        p.incrementPage
        return
      }
    }
    document.addEventListener("keydown", hotkeyPress)
    return () => document.removeEventListener("keydown", hotkeyPress)
  })

  return null
}

function addKeyboardShortcutForPageNavigation(decr: () => void, incr: () => void) {
  createEffect(() => {
    function hotkeyPress(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && (e.ctrlKey || e.metaKey)) {
        decr()
        return
      }
      if (e.key === "ArrowRight" && (e.ctrlKey || e.metaKey)) {
        incr()
        return
      }
    }
    document.addEventListener("keydown", hotkeyPress)
    return () => document.removeEventListener("keydown", hotkeyPress)
  }, [])
}
