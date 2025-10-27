import type { Table as ReactTable } from "@tanstack/react-table";

export interface PaginationProps<T = any> {
  table: ReactTable<T>;
}
