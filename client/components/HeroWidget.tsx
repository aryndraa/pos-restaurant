"use client";

import React from "react";
import { useUser } from "@/lib/stores/User";

export default function HeroWidget() {
  const user = useUser((state) => state.user);

  return (
    <div className="px-4 py-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold ">
        Hi {user?.name}!, <br /> Anything to Eat?
      </h1>
      {/* <SearchLabel /> */}
    </div>
  );
}
