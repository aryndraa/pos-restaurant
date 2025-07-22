"use client";

import Counter from "@/components/Counter";
import logo from "@/public/logo.svg";
import registSVG from "@/public/regist.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleFocus = () => {
      setTimeout(() => {
        inputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    };

    const input = inputRef.current;
    input?.addEventListener("focus", handleFocus);

    return () => {
      input?.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Image src={registSVG} alt="" />
      <div className="bg-white py-6 px-4 flex flex-col items-center rounded-xl">
        <div className="flex flex-col items-center mb-8">
          <Image src={logo} alt="" className="mb-4" />
          <h1 className="text-2xl font-bold">Welcom to Kedai Jawa</h1>
        </div>
        <div>
          <div className="w-full mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter Your Name"
              className="focus:outline-none p-4 border-b border-zinc-400 font-semibold w-full mb-2"
            />
            <p className="text-sm">
              *your name will be used for improving service experience
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Person : </span>
              <Counter />
            </div>
            <button className="p-3 w-full bg-primary text-white font-bold rounded-full">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
