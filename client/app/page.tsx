import CategoryFilter from "@/components/CategoryFilter";
import HeroWidget from "@/components/HeroWidget";
import Menus from "@/components/Menus";

export default function Home() {
  return (
    <>
      <section className="mb-4">
        <HeroWidget />
      </section>
      <section className="mb-6">
        <CategoryFilter />
      </section>
      <section>
        <Menus />
      </section>
    </>
  );
}
