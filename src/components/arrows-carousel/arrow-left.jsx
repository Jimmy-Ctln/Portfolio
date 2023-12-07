import React from "react";

export const ArrowLeft = ({handlePrev}) => {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 20 20"
      fill="white"
      onClick={handlePrev}
    >
      <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM11.289,4.3,12.711,5.7l-4.3,4.344L12.7,14.289,11.3,15.711,5.586,10.063Z" />
    </svg>
  );
};
