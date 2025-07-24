import MenuCard from "@/components/MenuCard";
import MenuHeader from "@/components/MenuHeader";
import PageTitle from "@/components/PageTitle";
import { Foods } from "@/dummy/Food";

export default function Page() {
  return (
    <div>
      <PageTitle content="What do you want to eat?" />
      <MenuHeader />
      <div className="grid grid-cols-2 gap-2 ">
        {Foods.map((food, key) => (
          <MenuCard
            key={key}
            id={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
            categoryId={food.categoryId}
            image={food.image}
            rating={food.rating}
          />
        ))}
      </div>
    </div>
  );
}
