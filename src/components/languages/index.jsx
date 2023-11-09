import React from "react";
import Image from "next/image";

export const Languages = ({ src, name }) => {
  return (
        <div className="flex flex-col items-center">
          <Image src={src} width="50" height="50" alt={name} />
          <div>
            <p>{name}</p>
          </div>
      </div>
  );
};
