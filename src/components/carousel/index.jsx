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
          <div className="w-full h-full blur-sm">
            <Image
              key={prevProject.id}
              src={prevProject.src}
              className="rounded-3xl"
              width={1440}
              height={1155}
              style={{
                width:'100%',
                height:'100%',
                objectFit: 'cover'
              }}
              alt={`project ${prevProject.name}`}
            />
          </div>
          <div className="w-full h-full">
            <Image
              key={currentProject.id}
              src={currentProject.src}
              width={1440}
              height={1065}
              style={{
                width:'100%',
                height:'100%',
                objectFit: 'cover'
              }}
              className="rounded-3xl"
              alt={`project ${currentProject.name}`}
            />
          </div>
          <div className="w-full h-full blur-sm ">
            <Image
              key={nextProject.id}
              src={nextProject.src}
              className="rounded-3xl"
              width={1440}
              height={1395}
              style={{
                width:'100%',
                height:'100%',
                objectFit: 'cover'
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
      <div className="flex justify-center mt-10 gap-10">
        <p>{currentProject.name}</p>
        <p>{currentProject.description}</p>
        <Link href={currentProject.websiteLink}>
          <Image
            src={link}
            width={40}
            height={40}
            className="cursor-pointer"
            alt="link to the online project"
          />
        </Link>
        <Link href={currentProject.githubLink}>
          <Image
            src={github}
            className="cursor-pointer"
            width={40}
            height={40}
            alt="project link on github"
          />
        </Link>
      </div>
    </div>
  );
};
