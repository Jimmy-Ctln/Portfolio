'use client'

import React from "react";
import { Languages } from "@/components/languages";
import data from "@/data/data.json";
import Image from "next/image";
import frame9 from "public/assets/diamond_frames/frame9.png";
import { motion } from 'framer-motion'

export const Skills = () => {

  return (
    <section id="skills" className="relative h-full pt-28 pb-14 max-lg:pt-8 max-lg:pb-0">
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
      <div className="flex flex-col w-full items-center mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        <div className="flex flex-col gap-7 items-center mr-96 max-lg:mr-0">
          <h4 className="text-xl font-bold">INTÉGRATION</h4>
          <div className="rounded-2xl w-[800px] py-3.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
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
        <div className="flex flex-col gap-7 items-center ml-96 max-lg:ml-0">
          <h4 className="text-xl font-bold">FRONTEND</h4>
          <div className="rounded-2xl w-[800px] py-3.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
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
        <div className="flex flex-col gap-7 items-center mr-96 max-lg:mr-0">
          <h4 className="text-xl font-bold">BACKEND</h4>
          <div className="rounded-2xl w-[800px] h-24 py-3.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
          <div className="flex h-full w-full justify-center items-center">
            <p className="font-bold">EN COURS...</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
