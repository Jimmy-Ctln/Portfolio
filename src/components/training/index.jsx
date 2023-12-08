import React from "react";
import Image from "next/image";
import schedule from "../../../public/assets/icons/schedule.webp";

export const Training = ({ date, training, description }) => {
  return (
    <div className="w-96 h-auto rounded-2xl relative p-6 shadow-2xl bg-dark-custom bg-opacity-80 max-md:w-80">
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <Image src={schedule} className="w-8" alt="icon schedule" />
            <p className="font-bold text-xl">{date}</p>
          </div>
          <div>
            <p className="font-bold text-lg">{training}</p>
          </div>
          <div>
            <p className="text-1xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
