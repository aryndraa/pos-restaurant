import React from "react";
import dummyQR from "@/public/dumyqr.svg";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <section>
      <PageTitle content="Lets Complete Your Orders" />
      <div className="px-4 py-8 md:px-12 md:py-16 bg-white rounded-xl mb-3 mt-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Almost There <br /> Just One More Step
          </h1>
          <p className="text-sm md:text-base font-medium text-zinc-500">
            Scan or download QR and enter bills amount{" "}
          </p>
        </div>
        <div className="flex justify-center shrink-0">
          <Image
            src={dummyQR}
            height={200}
            width={200}
            alt=""
            className="w-56 h-56 md:w-64 md:h-64 rounded-xl p-4 border border-zinc-200 shadow-sm"
          />
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl">
        <div className="flex justify-between mb-4 font-medium">
          <p>Total:</p>
          <p>Rp. 100.000</p>
        </div>
        <button className="py-4 bg-primary w-full font-semibold text-white rounded-full">
          Download QR
        </button>
      </div>
    </section>
  );
}
