import type { TableColumnDef } from "~/table/shared/TableColumnDef"

export type Table1Data<T> = {
  rows: T[]
  columns: TableColumnDef<T>[]
}
