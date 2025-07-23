"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useFoodCategory } from "@/lib/contexts/FoodCategoryContext";
import { Categories } from "@/dummy/Categories";

export default function CategoryNav() {
  const { setId } = useFoodCategory();

  return (
    <div className="w-full overflow-x-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className="!overflow-visible"
      >
        <SwiperSlide className="!w-fit flex-shrink-0 px-4 py-2  bg-primary/10 rounded-full">
          <div className="flex items-center w-full gap-2 rounded-lg ">
            <span>🍔</span>
            <p className="font-bold text-primary">Pizza</p>
          </div>
        </SwiperSlide>
        {Categories.map((_, idx) => (
          <SwiperSlide key={idx} className="!w-fit  flex-shrink-0 px-4 py-2 ">
            <div className="flex items-center w-full gap-2  rounded-lg">
              <span>🍔</span>
              <p className="font-bold">Pizza</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
