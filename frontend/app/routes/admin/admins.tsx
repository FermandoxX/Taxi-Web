import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const userData = [
    {
        "name": "Sophia Martinez",
        "email": "sophia.martinez@example.com",
        "phone_number": "+1-415-789-2341",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "James O'Connor",
        "email": "james.oconnor@example.com",
        "phone_number": "+1-202-554-8876",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Elena Petrov",
        "email": "elena.petrov@example.com",
        "phone_number": "+1-718-923-4567",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Marcus Johnson",
        "email": "m.johnson@example.com",
        "phone_number": "+1-512-336-7892",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Aisha Patel",
        "email": "aisha.patel@example.com",
        "phone_number": "+1-646-281-5543",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Diego Fernandez",
        "email": "diego.f@example.com",
        "phone_number": "+1-305-472-9910",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Yuki Tanaka",
        "email": "yuki.tanaka@example.com",
        "phone_number": "+1-213-665-3328",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    },
    {
        "name": "Oliver Chen",
        "email": "oliver.chen@example.com",
        "phone_number": "+1-408-847-2201",
        "role": "admin",
        "action": [
            "update", "delete"
        ]
    }
]

const columns = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'phone_number',
        header: 'Phone Number',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'role',
        header: 'Role',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'action',
        header: 'Action',
        cell: (props: any) => <p>{props.getValue()}</p>
    }
];

function Admins() {
    const [data, setData] = useState(userData);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="overflow-hidden border border-gray-300 rounded-xl">
            <table className="border border-gray-100 w-[100%]">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} className="border-b border-gray-100">
                        {headerGroup.headers.map(header => (
                            <th key={header.id} style={{ width: header.getSize() }} className="p-3 text-xs text-left text-gray-700">
                                {header.column.columnDef.header}
                            </th>
                        ))}
                    </tr>
                ))}
                {
                    table.getRowModel().rows.map(row => <tr className="border-b border-gray-100" key={row.id}>
                        {row.getVisibleCells().map(cell => <td className="p-3 text-sm text-gray-700" key={cell.id} style={{ width: cell.column.getSize() }}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </td>)}
                    </tr>)
                }
            </table>
        </div>
    );
}

export default Admins
