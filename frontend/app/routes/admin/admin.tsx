import { ActionCell, RoleCell, Table, TextCell } from "components";
import { UserAvatar } from "components/UserAvatar";
import { useState } from "react";
import { clientTable } from "~/hooks/clientTable";

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
    cell: (props: any) => <TextCell value={props.getValue()}></TextCell>,
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
    cell: (props: any) => <TextCell value={props.getValue()}></TextCell>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props: any) => <RoleCell value={props.getValue()} />,
    enableSorting: false,
  },
  {
    accessorKey: "action",
    header: "Action",
    enableSorting: false,
    cell: (props: any) => <ActionCell value={props.getValue()} />,
  },
];

function Admin() {
  const [data, setData] = useState(userData);

  const clientTabale = clientTable(data, columns, [
    "name",
    "email",
    "phone_number",
  ]);

  return <Table tableTitle="Admin List" clientTable={clientTabale}></Table>;
}

export default Admin;
