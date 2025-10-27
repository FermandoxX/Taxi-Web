import { BsPencilSquare } from "react-icons/bs";
import type { ActionCellProps } from "./ActionCellProps";
import { FaRegTrashAlt } from "react-icons/fa";

export function ActionCell({ value }: ActionCellProps) {
  return (
    <div className="flex gap-2">
      {value.map((action: string, index: any) =>
        action == "delete" ? (
          <button
            key={index}
            className="p-2 text-red-600 transition-all rounded-lg cursor-pointer hover:bg-red-100 hover:scale-105"
            title="Delete"
          >
            <FaRegTrashAlt size={18} />
          </button>
        ) : (
          <button
            key={index}
            className="p-2 text-blue-600 transition-all rounded-lg cursor-pointer hover:bg-blue-100 hover:scale-105"
            title="Edit"
          >
            <BsPencilSquare size={18} />
          </button>
        )
      )}
    </div>
  );
}
