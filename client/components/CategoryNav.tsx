"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useFoodCategory } from "@/lib/contexts/FoodCategoryContext";
import { Categories } from "@/dummy/Categories";
import SwiperCore from "swiper";

export default function CategoryNav() {
  const { setId, id } = useFoodCategory();
  const swiperRef = useRef<SwiperCore>(null);

  useEffect(() => {
    const index = Categories.findIndex((cat) => cat.id === id);
    if (swiperRef.current && index !== -1) {
      swiperRef.current.slideTo(index, 300); // 300ms = smooth transition
    }
  }, [id]);

  return (
    <div className="w-full overflow-x-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!overflow-visible"
      >
        <SwiperSlide
          className={`!w-fit flex-shrink-0 px-4 py-2 rounded-full ${
            id === 0 && "bg-primary/10"
          }`}
        >
          <button
            onClick={() => setId(0)}
            className="flex items-center w-full gap-2 rounded-lg "
          >
            <p className={`font-bold ${id === 0 && "text-primary"}`}>All</p>
          </button>
        </SwiperSlide>
        {Categories.map((category, idx) => (
          <SwiperSlide
            key={idx}
            className={`!w-fit flex-shrink-0 px-4 py-2 rounded-full ${
              id === category.id && "bg-primary/10"
            }`}
          >
            <button
              onClick={() => setId(category.id)}
              className="flex items-center w-full gap-2  rounded-lg"
            >
              <span>{category.emoji}</span>
              <p
                className={`font-bold ${id === category.id && "text-primary"}`}
              >
                {category.name}
              </p>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
