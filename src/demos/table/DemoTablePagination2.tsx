import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import type { JSXElement } from "solid-js"
import { createEffect, Show } from "solid-js"
import { ttl } from "~ui/i18n/ttl"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { tbShowing } from "~ui/table/table3/pagination/tbShowing"
import { tbTo } from "~ui/table/table3/pagination/tbTo"
import { tbOf } from "~ui/table/table3/pagination/tbOf"
import { tbEntries } from "~ui/table/table3/pagination/tbEntries"
import { tbPage } from "~ui/table/table3/pagination/tbPage"
import { tbPreviousPage } from "~ui/table/table3/pagination/tbPreviousPage"
import { tbPreviousPageWithShortcut } from "~ui/table/table3/pagination/tbPreviousPageWithShortcut"
import { tbNextPage } from "~ui/table/table3/pagination/tbNextPage"
import { tbNextPageWithShortcut } from "~ui/table/table3/pagination/tbNextPageWithShortcut"
import { classMerge } from "~ui/utils/classMerge"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
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

function TablePaginationInfo(p: AtomizedTablePaginationProps) {
  return (
    <Show when={p.entriesSignal.get() > 0 && p.entriesSignal.get() > p.entriesPerPage}>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{ttl(tbPage)}</T>
        <A>{p.currentPageSignal.get() + 1}</A>
        <T>{"/"}</T>
        <A>{Math.ceil(p.entriesSignal.get() / p.entriesPerPage)}</A>
      </p>
    </Show>
  )
}

function TablePaginationInfo2(p: AtomizedTablePaginationProps) {
  const entries = p.entriesSignal.get()
  const currentPage = p.currentPageSignal.get()

  if (entries <= 0) return null
  if (entries <= p.entriesPerPage) return null
  const totalPages = Math.ceil(entries / p.entriesPerPage)

  const text1 = ttl(tbShowing)
  const from = entries > p.entriesPerPage ? currentPage * p.entriesPerPage + 1 : 1
  const text2 = ttl(tbTo)
  const to = Math.min((currentPage + 1) * p.entriesPerPage, entries)
  const text3 = ttl(tbOf)
  const total = entries
  const text4 = ttl(tbEntries)

  return (
    <div>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{ttl(tbPage)}</T>
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

function T({ children }: MayHaveChildren): JSXElement {
  return <span class={"text-gray-700 dark:text-gray-300"}>{children}</span>
}

function A({ children }: MayHaveChildren): JSXElement {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold "}>{children}</span>
}

function B({ children }: MayHaveChildren): JSXElement {
  // text-blue-500 dark:text-blue-800
  return <span class={"font-semibold text-blue-500 dark:text-blue-800"}>{children}</span>
}

function TablePaginationButtons(p: AtomizedTablePaginationProps) {
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
          title={ttl(tbPreviousPageWithShortcut)}
        >
          {ttl(tbPreviousPage)}
        </ButtonIcon>
        <ButtonIcon
          iconRight={mdiChevronRight}
          iconClass={"ml-0.5"}
          variant={buttonVariant.subtle}
          disabled={p.currentPageSignal.get() >= Math.floor(p.entriesSignal.get() / p.entriesPerPage)}
          onClick={p.incrementPage}
          title={ttl(tbNextPageWithShortcut)}
        >
          {ttl(tbNextPage)}
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
