"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaQrcode } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { HiOutlineSwitchVertical } from "react-icons/hi";

export default function PaymentButton() {
  const [modal, setModal] = useState<boolean>(false);
  const [payment, setPayment] = useState<boolean>(false);

  return (
    <>
      <div className="fixed z-10 bottom-0 left-0 right-0 m-4 my-2">
        <div className="p-4 py-3 bg-white shadow rounded-xl flex flex-col relative">
          <div className="mb-3">
            {modal && (
              <div className="bg-white absolute px-4 py-2 flex flex-col gap-6 rounded-xl w-full shadow transform -translate-y-28 left-0">
                <button
                  onClick={() => {
                    setPayment(false);
                    setModal(false);
                  }}
                  className="flex gap-2 items-center text-lg font-semibold"
                >
                  <span className="text-primary text-xl">
                    <FaQrcode />
                  </span>
                  Qris
                </button>
                <button
                  onClick={() => {
                    setPayment(true);
                    setModal(false);
                  }}
                  className="flex gap-2 items-center text-lg font-semibold"
                >
                  <span className="text-green-600 text-xl">
                    <FaCashRegister />
                  </span>
                  Cash
                </button>
              </div>
            )}
            <button
              onClick={() => setModal(!modal)}
              className="flex items-center gap-4"
            >
              {payment ? (
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">
                    <FaCashRegister />
                  </span>
                  <span className="font-semibold text-lg">Cash</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-primary text-xl">
                    <FaQrcode />
                  </span>
                  <span className="font-semibold text-lg">Qris</span>
                </div>
              )}

              <span className="text-sm p-1 bg-zinc-400 text-white rounded-full">
                <HiOutlineSwitchVertical />
              </span>
            </button>
          </div>
          <Link
            href={payment ? "payment/cash" : "payment/qris"}
            className="flex justify-center bg-primary text-white font-semibold w-full py-3 rounded-full"
          >
            Confirm and Pay
          </Link>
        </div>
      </div>
      {modal && <div className="bg-black/20 fixed inset-0"></div>}
    </>
  );
}
