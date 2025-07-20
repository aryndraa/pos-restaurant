import React from "react";

export default function PaymentDetail() {
  return (
    <div className="py-8 px-4 bg-white rounded-xl">
      <div className="text-center border-b pb-6 mb-6 border-zinc-300">
        <p className="text-xl font-medium mb-2">Grand total</p>
        <h2 className="text-4xl font-bold">Rp100.000</h2>
      </div>
      <div className="flex flex-col gap-6 border-b pb-6 mb-6 border-zinc-300">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Mie Jawa x2</h3>
          <p>Rp.100.000</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Mie Jawa x2</h3>
          <p>Rp.100.000</p>
        </div>
        <div className="flex justify-between items-center text-zinc-400">
          <h3 className="font-semibold">Tax & Fee</h3>
          <p>Rp.100.000</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Total</h3>
        <p>Rp.100.000</p>
      </div>
    </div>
  );
}
