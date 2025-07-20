import React from "react";
import SearchLabel from "./SearchLabel";

export default function HeroWidget() {
  return (
    <div className="px-4 py-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Hi Arya!, <br /> Anything to Eat?
      </h1>
      <SearchLabel />
    </div>
  );
}
