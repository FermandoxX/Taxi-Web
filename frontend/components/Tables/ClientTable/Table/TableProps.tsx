import type { Table as ReactTable } from "@tanstack/react-table";

export interface TableProps<T = any> {
  clientTable: {
    table: ReactTable<T>;
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
  };
}
