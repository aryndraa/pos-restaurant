"use client";

import Counter from "@/components/Counter";
import { useUser } from "@/lib/stores/User";
import logo from "@/public/logo.svg";
import registSVG from "@/public/regist.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setUser = useUser((state) => state.setUser);
  const router = useRouter();

  const [count, setCount] = useState<number>(1);
  const [name, setName] = useState<string>("");

  const handleClick = () => {
    if (name && count) {
      setUser({ name: name.trim(), count });
      router.replace("/");
    } else if (!name) {
      toast.error("please confirm your name");
    }
  };

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
    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 min-h-[70vh]">
      <div className="flex-1">
        <Image src={registSVG} alt="" className="w-full h-auto" />
      </div>
      <div className="flex-1 bg-white py-8 px-6 flex flex-col items-center rounded-xl shadow-sm border border-zinc-100">
        <div className="flex flex-col items-center mb-8 w-full">
          <Image src={logo} alt="" className="mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome to Kedai Jawa</h1>
        </div>
        <div className="w-full max-w-md">
          <div className="w-full mb-8">
            <input
              ref={inputRef}
              type="text"
              required
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              className="focus:ring-2 focus:ring-primary/20 p-4 border-b-2 border-zinc-200 focus:border-primary font-semibold w-full mb-3 transition-all outline-none"
            />
            <p className="text-sm text-zinc-500">
              *your name will be used for improving service experience
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between mb-8 p-4 bg-zinc-50 rounded-lg">
              <span className="text-lg font-semibold">Person : </span>
              <Counter count={count} setCount={setCount} />
            </div>
            <button
              onClick={handleClick}
              className="p-4 w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-md active:scale-[0.98]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
