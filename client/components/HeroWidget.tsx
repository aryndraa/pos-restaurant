"use client";

import React from "react";
import { useUser } from "@/lib/stores/User";

export default function HeroWidget() {
  const user = useUser((state) => state.user);

  return (
    <div className="px-4 py-6 md:px-8 md:py-10 bg-white rounded-lg transition-all">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold ">
        Hi {user?.name}!, <br className="hidden md:block" /> Anything to Eat?
      </h1>
      {/* <SearchLabel /> */}
    </div>
  );
}
