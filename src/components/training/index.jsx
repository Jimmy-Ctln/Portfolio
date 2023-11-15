import React from "react";
import Image from "next/image";
import schedule from "../../../public/assets/icons/schedule.png";

export const Training = ({ date, training, description }) => {
  return (
    <div className="flex flex-col gap-2 training-component w-80 h-auto rounded-2xl relative p-4 bg-secondary">
      <div className="flex items-center gap-5">
        <Image src={schedule} className="w-8" alt="icon schedule" />
        <p className="font-bold text-lg">{date}</p>
      </div>
      <div>
        <p className="font-bold text-1xl">{training}</p>
      </div>
      <div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
