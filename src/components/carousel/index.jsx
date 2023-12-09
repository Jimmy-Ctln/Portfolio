"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "@/components/arrows-carousel/arrow-left.jsx";
import { ArrowRight } from "@/components/arrows-carousel/arrow-right.jsx";
import github from "public/assets/social_network_icons/github.svg";
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

  const handlePrev = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setCurrentIndex(prevIndex);
    }
  };

  const handleNext = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setCurrentIndex(nextIndex);
    }
  };

  const openGithubLink = (link, event) => {
    if (event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter") 
    ){
      window.open(link, "_blank");
    }
  };

  return (
    <div className="flex justify-center mt-10 p-5">
      <div className="flex relative items-center gap-3 justify-center px-1">
        <div className="z-40">
          <ArrowLeft handlePrev={handlePrev} />
        </div>
        <div className="w-[280px] h-[420px] blur-sm mr-[-60px] shadow-xl brightness-50 max-xl:w-[180px] max-lg:w-[150px] max-[965px]:hidden">
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
        <div className="w-[700px] h-[600px] z-10 relative shadow-xl max-2xl:w-[600px] max-2xl:h-[500px]">
          <div className="before-element absolute rounded-bl-[20px] rounded-br-[20px] bottom-0 w-full h-36 bg-gradient-to-t from-third to-secondary">
            <div className="absolute left-0 bottom-0 flex w-full h-full">
              <div className="flex gap-10 p-10 w-full items-center">
                <p className="font-bold flex-1 text-lg text-center">
                  {currentProject.name}
                </p>
                <p className="text-base w-3/5">{currentProject.description}</p>
                  <Image
                    className="w-7 h-7 cursor-pointer flex-1"
                    src={github}
                    alt="logo github"
                    tabIndex={0}
                    role="link"
                    onClick={(event) => openGithubLink(currentProject.githubLink, event)}
                    onKeyDown={(event) => openGithubLink(currentProject.githubLink, event)}
                  />
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
            className="rounded-3xl cursor-pointer"
            alt={`project ${currentProject.name}`}
            tabIndex={0}
            onClick={(event) => openGithubLink(currentProject.githubLink, event)}
            onKeyDown={(event) => openGithubLink(currentProject.githubLink, event)}
          />
        </div>
        <div className="w-[280px] h-[420px] blur-sm ml-[-60px] shadow-xl brightness-50 max-xl:w-[180px] max-lg:w-[150px] max-[965px]:hidden">
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
        <div className="z-40">
          <ArrowRight handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};
