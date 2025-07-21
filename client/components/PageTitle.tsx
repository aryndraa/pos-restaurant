import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function PageTitle({
  to = "/",
  content,
}: {
  to?: string;
  content: string;
}) {
  return (
    <div className="grid grid-cols-4 items-center ">
      <Link href={to} className="text-sm p-2 border rounded-full w-fit">
        <IoIosArrowBack />
      </Link>
      <h1 className="col-span-2 text-nowrap text-center  font-semibold ">
        {content}
      </h1>
    </div>
  );
}
