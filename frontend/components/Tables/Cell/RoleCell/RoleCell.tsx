import type { RoleCellProps } from "./RoleCellProps";

export function RoleCell({ value }: RoleCellProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-800 capitalize bg-indigo-100 rounded-full">
      {value}
    </span>
  );
}
