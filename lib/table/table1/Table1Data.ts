import type { TableColumnDef } from "~ui/table/shared/TableColumnDef"

export type Table1Data<T> = {
  rows: T[]
  columns: TableColumnDef<T>[]
}
