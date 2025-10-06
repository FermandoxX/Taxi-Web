import type { IconButtonProps } from "./IconButtonProps";

export function IconButton({
  icon,
  className,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={`border border-gray-300 p-3 cursor-pointer ${className} flex items-center gap-2 hover:bg-gray-50 hover:text-gray-800`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
