"use client";

import React from "react";
import { Languages } from "@/components/languages";
import data from "@/data/data.json";
import Image from "next/image";
import frame9 from "public/assets/diamond_frames/frame9.webp";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-full pt-20 pb-14 max-lg:pt-14 max-lg:pb-0"
    >
      <div className="flex justify-center items-center">
        <h5 className="text-4xl h-auto font-bold max-lg:text-3xl">
          COMPÉTENCES
        </h5>
        <motion.div
          className="z-[-50] w-[230px] max-xl:w-[170px] max-lg:w-[150px] max-md:w-[120px] max-sm:w-24"
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            width={150}
            height={150}
            src={frame9}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="diamond icon"
          />
        </motion.div>
      </div>
      <div className="flex flex-col  items-center w-full mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        <div className="flex flex-col gap-7 items-center mr-96 max-lg:mr-0">
          <h5 className="text-xl font-bold">INTÉGRATION</h5>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
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
          <h5 className="text-xl font-bold">FRONTEND</h5>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
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
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
            {data.languages.backend.map((language) => (
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
          <h4 className="text-xl font-bold">BASE DE DONNÉES</h4>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
            {data.languages.database.map((language) => (
                <Languages
                  key={language.id}
                  name={language.name}
                  src={language.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
