import React from "react";

export const ArrowRight = ({handleNext}) => {
  return (
    <svg
      className="max-lg:w-[30px] cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 20 20"
      fill="white"
      onClick={handleNext}
    >
      <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
    </svg>
  );
};
