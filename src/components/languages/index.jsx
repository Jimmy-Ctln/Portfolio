import React from "react";
import Image from "next/image";

export const Languages = ({ src, name }) => {
  return (
      <div className="flex flex-col items-center justify-center w-full rounded-xl">
        <Image src={src} width="50" height="50" alt={name} />
        <div>
          <p className="w-full text-sm max-sm:text-xs">{name}</p>
        </div>
    </div>
  );
};
