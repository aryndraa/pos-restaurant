import React from "react";
import dummyQR from "@/public/dumyqr.svg";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <section>
      <PageTitle content="Lets Complete Your Orders" />
      <div className="px-4 py-6 bg-white rounded-xl mb-3 mt-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">
            Almost There <br /> Just One More Step
          </h1>
          <p className="text-sm font-medium text-zinc-500">
            Show this QR code to the cashier and pay the bills
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Image
            src={dummyQR}
            height={50}
            width={50}
            alt=""
            className="w-56 h-56 rounded-xl p-2 border border-zinc-400"
          />
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl">
        <div className="flex justify-between mb-4 font-medium">
          <p>Total:</p>
          <p>Rp. 100.000</p>
        </div>
        <button className="py-4 bg-zinc-100 w-full font-semibold  rounded-full text-primary">
          Cancel Payment
        </button>
      </div>
    </section>
  );
}
