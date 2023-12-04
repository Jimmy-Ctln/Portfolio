'use client'

import React from "react";
import { Languages } from "../../../components/languages";
import data from "../../../data/data.json";
import Image from "next/image";
import frame9 from "../../../../public/assets/diamond_frames/frame9.png";
import { motion } from 'framer-motion'

export const Skills = () => {

  return (
    <section id="skills" className="relative mt-20 pt-28 pb-14 border-2 border-white-500 max-lg:pt-8 max-lg:pb-0">
        <div className="flex justify-center items-center">
          <h3 className="text-4xl h-auto font-bold max-lg:text-3xl">COMPÉTENCES</h3>
          <motion.div
          className="z-[-50] max-sm:w-20"
          animate={{y:20}}
          transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut"
        }}>
            <Image
              width={150}
              height={150}
              src={frame9}
              alt="diamond icon"
            />
          </motion.div>
        </div>
      <div className="flex flex-col w-full items-center gap-10 mt-20 max-lg:mt-10">
        <div className="flex flex-col gap-5 items-center mr-96 max-lg:mr-0">
          <h4>INTÉGRATION</h4>
          <div className="rounded-2xl w-full py-3.5 px-10 bg-secondary">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {data.languages.integration.map((language) => (
                <Languages
                  key={language.id}
                  name={language.name}
                  src={language.src}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center ml-96 max-lg:ml-0">
          <h4>FRONTEND</h4>
          <div className="rounded-2xl py-3.5 px-10 bg-secondary">
          <div className="flex gap-8 w-full max-[400px]:gap-4">
            {data.languages.frontend.map((language) => (
              <Languages
                key={language.id}
                name={language.name}
                src={language.src}
              />
            ))}
          </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center mr-96 max-lg:mr-0">
          <h4>BACKEND</h4>
          <div className="rounded-2xl h-24 py-3.5 px-10 bg-secondary">
          <div className="flex h-full w-full justify-center items-center">
            <p className="">EN COURS...</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
