import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Row,
} from "@tanstack/react-table";
import { useState } from "react";

export const clientTable = (
  data: any,
  columns: any,
  columnSearch: string[]
) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageIndex: 0,
  });

  const multiColumnFilter = (
    row: Row<any>,
    columnId: string,
    filterValue: string
  ): boolean => {
    return columnSearch.some((columnName) => {
      const value = row.getValue(columnName) as string;
      return value?.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    globalFilterFn: multiColumnFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return { table, globalFilter, setGlobalFilter };
};
