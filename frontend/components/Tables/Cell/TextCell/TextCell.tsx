import type { TextCellProps } from "./TextCellProps";

export function TextCell({ value }: TextCellProps) {
  return <p className="text-sm text-gray-600">{value}</p>;
}
