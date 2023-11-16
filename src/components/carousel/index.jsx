"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import arrowLeft from "../../../public/assets/icons/arrow-left.png";
import arrowRight from "../../../public/assets/icons/arrow-right.png";
import github from "../../../public/assets/icons/github.png";
import link from "../../../public/assets/icons/link.png";
import data from "../../data/data.json";
import Link from "next/link";

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
    <div className="relative">
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-5 justify-center">
          <Image
            src={arrowLeft}
            className="w-20 h-auto cursor-pointer"
            onClick={handlePrev}
            alt="arrow left button"
          />
          <div className="w-96 h-420 blur-sm mr-[-60px] brightness-50">
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
          <div className="w-700 h-461 z-10 relative">
            <div className="before-element absolute rounded-bl-[20px] rounded-br-[20px] bottom-0 w-full h-20 bg-secondary opacity-100">
              <div className="absolute bottom-0 flex justify-center items-center w-full h-full gap-14">
                <div className="flex gap-20 items-center">
                  <p className="font-bold text-base">{currentProject.name}</p>
                  <p className="w-72 text-sm">{currentProject.description}</p>
                </div>
              </div>
                {/* <div className="absolute right-[25px] bottom-[25px] flex items-center gap-5">
                  <Link href={currentProject.websiteLink}>
                    <Image
                      src={link}
                      width={30}
                      height={30}
                      className="cursor-pointer"
                      alt="link to the online project"
                    />
                  </Link>
                  <Link href={currentProject.githubLink}>
                    <Image
                      src={github}
                      className="cursor-pointer"
                      width={30}
                      height={30}
                      alt="project link on github"
                    />
                  </Link>
                </div> */}
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
          <div className="w-96 h-420 blur-sm ml-[-60px] brightness-50">
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
            className="w-20 h-auto cursor-pointer"
            onClick={handleNext}
            alt="arrow right button"
          />
        </div>
      </div>
    </div>
  );
};
