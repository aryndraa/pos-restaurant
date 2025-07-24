"use client";

import { Food } from "@/dummy/Food";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddCartModal from "./AddCartModal";

export default function MenuCard({
  id,
  name,
  description,
  price,
  image,
  rating,
  categoryId,
}: Food) {
  const food = { id, name, image, description, price, rating, categoryId };
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="p-4 bg-white rounded-lg">
        <div className="mb-3">
          <img
            src={image}
            alt=""
            className="rounded-xl aspect-square object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs font-medium text-zinc-400">{description}</p>
          <div className="mt-3 flex justify-between items-end">
            <span className="font-semibold">
              Rp. {price.toLocaleString("id-ID")}
            </span>
            <button
              onClick={() => setOpenModal(true)}
              className="p-3 rounded-full bg-primary text-white"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <AddCartModal
        open={openModal}
        setOpen={() => setOpenModal(false)}
        food={food}
      />
    </>
  );
}
