import type { ReactNode } from "react";
import { Link } from "react-router";

interface LinkMenuItemProps {
  icon?: ReactNode;
  label: string;
  url: string;
  onClick?: () => void;
}

export function LinkMenuItem({ icon, label, url, onClick }: LinkMenuItemProps) {
  return (
    <Link
      to={url}
      className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm block font-medium">{label}</span>
    </Link>
  );
}
