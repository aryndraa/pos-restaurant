import React from "react";
import SearchModal from "./SearchModal";
import CategoryNav from "./CategoryNav";

export default function MenuHeader() {
  return (
    <div className="p-4 pb-2 fixed top-0 left-0 right-0 bg-background">
      <div className="bg-white flex items-center px-4 rounded-full py-3 gap-1 ">
        <SearchModal />
        <CategoryNav />
      </div>
    </div>
  );
}
