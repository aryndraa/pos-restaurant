"use client";
import Image from "next/image";
import React, { useState } from "react";
import cooking from "@/public/cooking.svg";
import StatusCard from "@/components/StatusCard";

export type StatusType = {
  status: string;
  title: string;
  time: number;
};

export default function Page() {
  const [status, setStatus] = useState<StatusType>({
    status: "cooking",
    time: 32,
    title: "Cooking Your Food",
  });

  return (
    <div>
      <div className="py-8">
        <Image src={cooking} alt="" className="w-full " />
      </div>
      <div>
        <StatusCard time={status.time} title={status.title} />
      </div>
    </div>
  );
}
