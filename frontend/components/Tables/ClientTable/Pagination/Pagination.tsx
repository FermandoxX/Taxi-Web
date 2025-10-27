import type { PaginationProps } from "./PaginationProps";

export function Pagination({ table }: PaginationProps) {
  return (
    <div className="flex items-center gap-5">
      <button
        className={`border border-gray-300 p-2 rounded-lg ${
          table.getCanPreviousPage()
            ? "cursor-pointer hover:bg-gray-50 hover:text-gray-800"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {" "}
        Previous{" "}
      </button>
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      <button
        className={`border border-gray-300 p-2 rounded-lg ${
          table.getCanNextPage()
            ? "cursor-pointer hover:bg-gray-50 hover:text-gray-800"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}
