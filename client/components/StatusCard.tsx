import React from "react";

export default function StatusCard({
  title,
  time,
}: {
  title: string;
  time: number;
}) {
  return (
    <div className="py-8 px-6 bg-primary rounded-xl flex items-center flex-col">
      <h1 className="font-bold text-3xl text-white pb-4 mb-4 border-b border-white/60">
        {title}
      </h1>
      <div className="text-center">
        <h3 className="text-white mb-1 text-2xl font-semibold">
          {time} Minutes
        </h3>
        <p className="text-white">Waiting Time</p>
      </div>
    </div>
  );
}
