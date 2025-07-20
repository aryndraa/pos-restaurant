import Link from "next/link";
import React from "react";
import MenuCard from "./MenuCard";

export default function Menus() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Pics</h2>
        <Link href={"/menus"} className="text-primary font-semibold ">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}
