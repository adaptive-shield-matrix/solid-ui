import { ttt } from "~ui/i18n/ttt"

export type TablePagination2Text = {
  page: string
  showing: string
  to: string
  of: string
  entries: string
  previousPage: string
  previousPageWithShortcut: string
  nextPage: string
  nextPageWithShortcut: string
}

export const tablePagination2TextDefault = {
  page: ttt("Page"),
  showing: ttt("Showing"),
  to: ttt("to"),
  of: ttt("of"),
  entries: ttt("entries"),
  previousPage: ttt("Previous page"),
  previousPageWithShortcut: ttt("Previous page (Ctrl/Cmd + ←)"),
  nextPage: ttt("Next page"),
  nextPageWithShortcut: ttt("Next page (Ctrl/Cmd + →)"),
} as const satisfies TablePagination2Text
