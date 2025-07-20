import MenuCard from "@/components/MenuCard";
import MenuHeader from "@/components/MenuHeader";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-4 items-center pt-4">
        <Link href={"/"} className="text-sm p-2 border rounded-full w-fit">
          <IoIosArrowBack />
        </Link>
        <h1 className="col-span-2 text-center  font-semibold ">
          Choice Your Order
        </h1>
      </div>
      <MenuHeader />
      <div className="grid grid-cols-2 gap-2 ">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}
