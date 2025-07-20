"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function CategoryFilter() {
  return (
    <div className="py-6 pb-4 px-4 bg-white rounded-lg overflow-x-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className="!overflow-visible"
        pagination={true}
        modules={[Pagination]}
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: "94px" }}
            className="!w-[94px] !h-[94px] flex-shrink-0 mb-10"
          >
            <div className="flex flex-col justify-center items-center bg-zinc-100 w-full h-full rounded-lg">
              <span className="text-3xl mb-2">🍔</span>
              <p className="font-bold">Pizza</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
