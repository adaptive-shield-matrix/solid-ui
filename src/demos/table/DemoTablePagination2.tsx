import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import type { JSXElement } from "solid-js"
import { createEffect, Show } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { classMerge } from "~ui/utils/classMerge"
import { createSignalObject, type SignalObject } from "~ui/utils/createSignalObject"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import type { TablePagination2Text } from "./TablePagination2Text"
import { tablePagination2TextDefault } from "./TablePagination2Text"

export interface AtomizedTablePaginationProps extends MayHaveClass {
  entriesPerPage: number
  entriesSignal: SignalObject<number>
  currentPageSignal: SignalObject<number>
  incrementPage: () => void
  decrementPage: () => void
  texts?: TablePagination2Text
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
  const texts = tablePagination2TextDefault
  return (
    <div class={classMerge("flex flex-wrap justify-center md:justify-between py-1 pl-3 gap-2", p.class)}>
      <TablePaginationInfo {...p} texts={texts} />
      <TablePaginationButtons {...p} texts={texts} />
      <TablePaginationButtonShortcuts {...p} />
    </div>
  )
}

function TablePaginationInfo(p: AtomizedTablePaginationProps & { texts: TablePagination2Text }) {
  return (
    <Show when={p.entriesSignal.get() > 0 && p.entriesSignal.get() > p.entriesPerPage}>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{p.texts.page}</T>
        <A>{p.currentPageSignal.get() + 1}</A>
        <T>{"/"}</T>
        <A>{Math.ceil(p.entriesSignal.get() / p.entriesPerPage)}</A>
      </p>
    </Show>
  )
}

function TablePaginationInfo2(p: AtomizedTablePaginationProps & { texts: TablePagination2Text }) {
  const entries = p.entriesSignal.get()
  const currentPage = p.currentPageSignal.get()

  if (entries <= 0) return null
  if (entries <= p.entriesPerPage) return null
  const totalPages = Math.ceil(entries / p.entriesPerPage)

  const from = entries > p.entriesPerPage ? currentPage * p.entriesPerPage + 1 : 1
  const to = Math.min((currentPage + 1) * p.entriesPerPage, entries)

  return (
    <div>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{p.texts.page}</T>
        <B>{currentPage + 1}</B>
        <T>{"/"}</T>
        <A>{totalPages}</A>
      </p>
      <p class={classMerge("flex flex-wrap gap-1 my-auto mx-1", p.class)}>
        <T>{p.texts.showing}</T>
        <A>{from}</A>
        <T>{p.texts.to}</T>
        <A>{to}</A>
        <T>{p.texts.of}</T>
        <A>{entries}</A>
        <T>{p.texts.entries}</T>
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

function TablePaginationButtons(p: AtomizedTablePaginationProps & { texts: TablePagination2Text }) {
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
          title={p.texts.previousPageWithShortcut}
        >
          {p.texts.previousPage}
        </ButtonIcon>
        <ButtonIcon
          iconRight={mdiChevronRight}
          iconClass={"ml-0.5"}
          variant={buttonVariant.subtle}
          disabled={p.currentPageSignal.get() >= Math.floor(p.entriesSignal.get() / p.entriesPerPage)}
          onClick={p.incrementPage}
          title={p.texts.nextPageWithShortcut}
        >
          {p.texts.nextPage}
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
