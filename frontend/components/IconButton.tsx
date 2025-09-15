import type { JSX } from "react";

interface IconButtonProps {
  icon: JSX.Element;
  className?: string;
}

export function IconButton({ icon, className }: IconButtonProps) {
  return (
    <button
      className={`border border-gray-300 p-3 cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );
}
