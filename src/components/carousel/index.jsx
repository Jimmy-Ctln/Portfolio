"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import arrowLeft from "../../../public/assets/icons/arrow-left.png";
import arrowRight from "../../../public/assets/icons/arrow-right.png";
import data from "../../data/data.json";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = data.carrousel.projects;
  const currentProject = projects[currentIndex];

  const totalProject = projects.length - 1;

  const prevIndex = currentIndex === 0 ? totalProject : currentIndex - 1;
  const prevProject = projects[prevIndex];

  const nextIndex = currentIndex === totalProject ? 0 : currentIndex + 1;
  const nextProject = projects[nextIndex];

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-5 justify-center w-11/12 px-1">
          <Image
            src={arrowLeft}
            className="w-20 h-auto cursor-pointer max-[945px]:w-11 max-sm:absolute max-sm:z-50 left-0"
            onClick={handlePrev}
            alt="arrow left button"
          />
          <div className="w-96 h-420 blur-sm mr-[-60px] brightness-50 max-xl:w-[200px] max-xl:h-[200px] max-[945px]:hidden">
            <Image
              key={prevProject.id}
              src={prevProject.src}
              className="rounded-3xl"
              width={1440}
              height={1065}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt={`project ${prevProject.name}`}
            />
          </div>
          <div className="w-700 h-461 z-10 relative max-xl:w-[600px] max-xl:h-[400px] max-sm:w-full max-sm:h-[300px]">
            <div className="before-element absolute rounded-bl-[20px] rounded-br-[20px] bottom-0 w-full h-20 bg-secondary opacity-100 max-lg:h-24">
              <div className="absolute bottom-0 flex justify-center items-center w-full h-full gap-14">
                <div className="flex gap-20 items-center max-xl:gap-[2%] max-lg:justify-around">
                  <p className="font-bold text-base max-lg:w-1/4 max-lg:text-sm">{currentProject.name}</p>
                  <p className="w-72 text-sm max-lg:w-1/2 max-lg:text-xs">{currentProject.description}</p>
                </div>
              </div>
            </div>
            <Image
              key={currentProject.id}
              src={currentProject.src}
              width={1440}
              height={1065}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="rounded-3xl"
              alt={`project ${currentProject.name}`}
            />
          </div>
          <div className="w-96 h-420 blur-sm ml-[-60px] brightness-50 max-xl:w-[200px] max-xl:h-[200px] max-[945px]:hidden">
            <Image
              key={nextProject.id}
              src={nextProject.src}
              className="rounded-3xl"
              width={1440}
              height={1065}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt={`project ${nextProject.name}`}
            />
          </div>
          <Image
            src={arrowRight}
            className="w-20 h-auto cursor-pointer max-[945px]:w-11 max-sm:absolute max-sm:z-50 right-0"
            onClick={handleNext}
            alt="arrow right button"
          />
        </div>
      </div>
  );
};
