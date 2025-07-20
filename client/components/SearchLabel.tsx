import React from "react";
import { CgSortAz } from "react-icons/cg";

export default function SearchLabel() {
  return (
    <div className="flex justify-between items-center w-full gap-2">
      <input
        type="text"
        placeholder="Search Foods"
        className="border border-zinc-200 py-4 px-4 focus:outline-0 rounded-full w-full font-medium text-sm"
      />
      <button className="p-2 text-3xl bg-primary text-white rounded-full">
        <CgSortAz />
      </button>
    </div>
  );
}
