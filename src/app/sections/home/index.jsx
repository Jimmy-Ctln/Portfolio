"use client";

import React from "react";
import Image from "next/image";
import frame2 from "../../../../public/assets/diamond_frames/frame2.png";
import frame4 from "../../../../public/assets/diamond_frames/frame4.png";
import main_picture from "../../../../public/assets/profile_photos/main_picture_750w.webp";
import { SocialNetworks } from "@/components/social-networks";
import { motion } from "framer-motion";
import Link from "next/link";

export const Home = () => {
  return (
    <section id="home" className="w-full border-4 border-green-500 relative">
      <div className="flex px-20 items-center justify-center ml-80 gap-20 my-80 max-lg:mt-14 max-lg:mb-0 max-lg:flex-col max-xl:ml-0 max-xl:gap-5 max-sm:px-5">
        <div className="flex flex-col gap-6 items-baseline max-lg:mt-0 max-lg:items-center max-lg:text-center">
          <h1 className="font-bold text-7xl max-lg:text-6xl max-sm:text-5xl">
            Jimmy<br></br>Catalano
          </h1>
          <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl">Développeur web</h2>
          <motion.button
          className="font-bold max-lg:text-lg flex gap-1 px-3.5 py-2.5 rounded-[10px] cursor-pointer bg-gradient-to-r from-fourth to-blue-500 opacity-100 max-lg:w-full max-lg:justify-center"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}
          >  
            <Link
              href="/assets/download/cv-jimmy-catalano.pdf"
              download="CV-Jimmy-Catalano-2023.pdf"
              target="_blank"
            >
              TÉLÉCHARGER MON CV
            </Link>
          </motion.button>
          <SocialNetworks />
        </div>
        <motion.div
        initial={{y:0}}
        animate={{y:10}}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        >
          <Image
            className="w-461 h-461 rounded-full object-cover z-10 max-lg:w-80 max-lg:h-80 max-sm:w-60 max-sm:h-60"
            src={main_picture}
            alt="Profile photo of Jimmy Catalano"
          />
        </motion.div>
      </div>
      <div className="w-full h-full">
      <motion.div
      className="absolute top-[130px] left-[0px] z-[-50] max-xl:w-72 max-lg:w-64 max-lg:top-[0px] max-sm:w-36"
        animate={{ x: 8, y: 8 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          width={368}
          height={462}
          src={frame2}
          alt="diamond icon"
        />
      </motion.div>
      </div>
      <div className="w-full h-full">
        <motion.div
        className=" absolute bottom-[45px] right-[60px] z-[-50] max-xl:w-72 max-lg:w-52 max-lg:right-[40px] max-sm:bottom-[25px] max-sm:w-28" 
        animate={{scale: 0.9, scale: 1.1}}
        transition={{
          repeat: Infinity,
          duration: 10,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        >
        <Image
          width={500}
          height={503}
          src={frame4}
          alt="diamond icon"
        />
        </motion.div>
      </div>
      </section>
  );
};
