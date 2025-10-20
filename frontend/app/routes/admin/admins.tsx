import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnFilter,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { Search } from "components";
import { UserAvatar } from "components/UserAvatar";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { id } from "zod/v4/locales";

const userData = [
  {
    name: "Sophia Martinez",
    profile_pic: "../../public/assets/images/profile/profile_pic.png",
    email: "sophia.martinez@example.com",
    phone_number: "+1-415-789-2341",
    role: "admin",
    action: ["update", "delete"],
  },
  {
    name: "James O'Connor",
    profile_pic: "../../public/assets/images/profile/profile_pic.png",
    email: "james.oconnor@example.com",
    phone_number: "+1-202-554-8876",
    role: "admin",
    action: ["update", "delete"],
  },
  {
    name: "Elena Petrov",
    profile_pic: "../../public/assets/images/profile/profile_pic.png",
    email: "elena.petrov@example.com",
    phone_number: "+1-718-923-4567",
    role: "admin",
    action: ["update", "delete"],
  },
  {
    name: "Marcus Johnson",
    profile_pic: "../../public/assets/images/profile/profile_pic.png",
    email: "m.johnson@example.com",
    phone_number: "+1-512-336-7892",
    role: "admin",
    action: ["update", "delete"],
  },
  {
    name: "Aisha Patel",
    profile_pic: "../../public/assets/images/profile/profile_pic.png",
    email: "aisha.patel@example.com",
    phone_number: "+1-646-281-5543",
    role: "admin",
    action: ["update", "delete"],
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props: any) => {
      const rowData = props.row.original;
      const profilePic = rowData.profile_pic;
      return (
        <div className="flex items-center gap-3">
          <UserAvatar src={profilePic} />
          <p className="text-sm font-medium text-gray-900">
            {props.getValue()}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props: any) => (
      <p className="text-sm text-gray-600">{props.getValue()}</p>
    ),
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
    cell: (props: any) => (
      <p className="text-sm text-gray-600">{props.getValue()}</p>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props: any) => {
      return (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-800 capitalize bg-indigo-100 rounded-full">
          {props.getValue()}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: (props: any) => {
      const actions = props.getValue();
      return (
        <div className="flex gap-2">
          {actions.map((action: string, index: any) =>
            action == "delete" ? (
              <button
                className="p-2 text-red-600 transition-all rounded-lg cursor-pointer hover:bg-red-100 hover:scale-105"
                title="Delete"
              >
                <FaRegTrashAlt size={18} />
              </button>
            ) : (
              <button
                className="p-2 text-blue-600 transition-all rounded-lg cursor-pointer hover:bg-blue-100 hover:scale-105"
                title="Edit"
              >
                <BsPencilSquare size={18} />
              </button>
            )
          )}
        </div>
      );
    },
  },
];

function Admins() {
  const [data, setData] = useState(userData);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <Search
          name="table_search"
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
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
                    {header.column.columnDef.header}
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
    </div>
  );
}

export default Admins;
