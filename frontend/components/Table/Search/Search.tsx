import { CiSearch } from "react-icons/ci";
import type { SearchProps } from "./SearchProps";

export function Search({ name, columnFilters, setColumnFilters }: SearchProps) {
  const valueeee =
    (columnFilters.find((f) => f.id === "name")?.value as string) || "";
  const onFilterChange = (id: string, value: string) => {};

  return (
    <div className="relative flex flex-col items-end justify-center w-full">
      <span className="absolute text-xl text-gray-500 -translate-y-1/2 right-48 top-5">
        <CiSearch size={23} />
      </span>

      <input
        type="text"
        name={name}
        // onChange={onChange}
        className="border border-gray-300 pl-11 h-10 rounded-lg placeholder-gray-400 placeholder:text-sm placeholder:font-medium outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
        placeholder="Search"
        value={valueeee}
      />
    </div>
  );
}
