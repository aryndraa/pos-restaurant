import MenuCard from "@/components/MenuCard";
import MenuHeader from "@/components/MenuHeader";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <div>
      <PageTitle content="What do you want to eat?" />
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
