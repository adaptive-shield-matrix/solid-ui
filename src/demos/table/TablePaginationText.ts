import { ttt } from "~ui/i18n/ttt"

export type TablePaginationText = {
  showing: string
  to: string
  of: string
  entries: string
  previousPage: string
  nextPage: string
}

export const tablePaginationTextDefault = {
  showing: ttt("Showing"),
  to: ttt("to"),
  of: ttt("of"),
  entries: ttt("entries"),
  previousPage: ttt("Previous page"),
  nextPage: ttt("Next page"),
} as const satisfies TablePaginationText
