"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {ArrowLeft} from "@/components/arrows-carousel/arrow-left.jsx";
import {ArrowRight} from "@/components/arrows-carousel/arrow-right.jsx";
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
        <div className="flex relative items-center gap-3 justify-center max-w-7xl px-1">
          <div className="flex max-[945px]:w-[70px] max-[945px]:h-[60%] max-[945px]:bg-gradient-to-l from-third to-secondary items-center justify-center rounded-xl z-40">
            <ArrowLeft handlePrev={handlePrev}/>
          </div>
          <div className="w-96 h-420 blur-sm mr-[-60px] shadow-xl brightness-50 max-xl:w-[150px] max-xl:h-[300px] max-[945px]:hidden">
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
          <div className="w-700 h-461 z-10 relative max-xl:w-[500px] max-xl:h-[500px] max-sm:w-full max-md:h-[300px] shadow-xl">
            <div className="before-element absolute rounded-bl-[20px] rounded-br-[20px] bottom-0 w-full h-20 bg-gradient-to-t from-third to-secondary max-lg:h-24">
              <div className="absolute bottom-0 flex justify-center items-center w-full h-full gap-14">
                <div className="flex gap-20 justify-center items-center max-xl:gap-10 max-sm:gap-5">
                  <p className="font-bold text-base text-center max-lg:w-1/4 max-lg:text-lg max-sm:text-sm">{currentProject.name}</p>
                  <p className="w-72 text-sm max-lg:w-1/2 max-lg:text-sm max-sm:text-sm">{currentProject.description}</p>
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
          <div className="w-96 h-420 blur-sm shadow-xl ml-[-60px] brightness-50 max-xl:w-[150px] max-xl:h-[300px] max-[945px]:hidden">
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
          <div className="flex max-[945px]:w-[70px] max-[945px]:h-[60%] max-[945px]:bg-gradient-to-r from-third to-secondary items-center justify-center rounded-xl z-40">
              <ArrowRight handleNext={handleNext}/>
          </div>
        </div>
      </div>
  );
};
