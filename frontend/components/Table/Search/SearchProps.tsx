import type { ColumnFiltersState } from "@tanstack/react-table";

export interface SearchProps {
  name: string;
  className?: string;
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}
