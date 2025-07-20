import MenuCard from "@/components/MenuCard";
import MenuHeader from "@/components/MenuHeader";

export default function Page() {
  return (
    <div>
      <MenuHeader />
      <div className="grid grid-cols-2 gap-2 mt-24">
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
