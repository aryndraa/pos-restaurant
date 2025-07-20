import React from "react";
import SearchModal from "./SearchModal";
import CategoryNav from "./CategoryNav";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function MenuHeader() {
  return (
    <div className="py-4 pb-2 flex flex-col gap-3  bg-background sticky top-0">
      <div className="bg-white flex items-center px-4 rounded-full py-3 gap-1 ">
        <SearchModal />
        <CategoryNav />
      </div>
    </div>
  );
}
