import FoodMenu from "@/components/FoodMenu";
import MenuHeader from "@/components/MenuHeader";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <div>
      <PageTitle content="What do you want to eat?" />
      <MenuHeader />
      <FoodMenu />
    </div>
  );
}
