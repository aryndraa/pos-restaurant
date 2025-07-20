import { FaSearch } from "react-icons/fa";

export default function SearchModal() {
  return (
    <div className="border-r border-r-zinc-200 pr-4">
      <button className="p-3 bg-primary text-white rounded-full h-fit ">
        <FaSearch />
      </button>
    </div>
  );
}
