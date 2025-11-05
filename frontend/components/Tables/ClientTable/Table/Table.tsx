import { FaSort } from "react-icons/fa6";
import type { TableProps } from "./TableProps";
import { flexRender } from "@tanstack/react-table";
import { Search } from "../Search";
import { Pagination } from "../Pagination";

export function Table({ clientTable, tableTitle, actionButton }: TableProps) {
    const table = clientTable.table;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-end">
                <p className="w-full text-lg font-semibold text-gray-800">
                    {tableTitle}
                </p>
                <div className="flex">
                    {actionButton}
                    <Search
                        name="table_search"
                        globalFilter={clientTable.globalFilter}
                        setGlobalFilter={clientTable.setGlobalFilter}
                    />
                </div>
            </div>
            <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} className="border-b border-gray-200">
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        style={{ width: header.getSize() }}
                                        className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                                    >
                                        <div className="flex items-center gap-2">
                                            {header.column.columnDef.header}
                                            {header.column.getCanSort() && (
                                                <FaSort
                                                    className="cursor-pointer"
                                                    onClick={header.column.getToggleSortingHandler()}
                                                />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="transition-colors hover:bg-gray-50">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="px-6 py-4 whitespace-nowrap"
                                        key={cell.id}
                                        style={{ width: cell.column.getSize() }}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination table={table}></Pagination>
        </div>
    );
}
