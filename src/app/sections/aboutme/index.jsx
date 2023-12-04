'use client'

import React from "react";
import Image from "next/image";
import profilePicture from "../../../../public/assets/profile_photos/profile_photo_800w.jpg";
import frame8 from "../../../../public/assets/diamond_frames/frame8.png";
import frame7 from "../../../../public/assets/diamond_frames/frame7.png";
import { SocialNetworks } from "../../../components/social-networks";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section id="about-me" className="mt-32 pt-32 border-2 relative border-purple-500 max-lg:pt-14 max-lg:pb-0">
      <div className="text-center">
        <h3 className="text-4xl font-bold max-lg:text-3xl">QUI SUIS-JE ?</h3>
      </div>
      <div className="flex justify-around my-40 ml-20 max-lg:flex-col max-lg:items-center max-lg:mt-6 max-lg:gap-10 max-lg:mb-0 max-lg:pl-0 max-lg:ml-0">
        <div className="flex flex-col gap-y-4 w-1/3 mt-10 max-lg:w-full max-xl:mt-0 max-lg:px-16 max-lg:gap-y-8 max-lg:mt-3 max-lg:text-center">
          <h3 className="text-2xl font-bold max-md:text-lg">MOI C&lsquo;EST JIMMY CATALANO</h3>
          <p className="text-lg max-md:text-sm">
            Mécanicien avion de formation, j&lsquo;ai rapidement bifurqué
            vers la création de contenus.
          </p>
          <p className="text-lg max-md:text-sm">
            Passionné de jeux vidéo et d&lsquo;informatique, mon coeur a
            finalement penché pour le développement web qui me semblait une
            suite logique à l&lsquo;issue de ma formation en création de contenu
            digital.
          </p>
        </div>
        <div className="flex flex-col items-center w-3/6">
          <div
          className="w-96 h-96 max-lg:w-72 max-lg:h-72">
          <Image
            className="rounded-45"
            src={profilePicture}
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt="Profile photo of Jimmy Catalano"
          />
          </div>
          <div className="mt-5 max-lg:flex max-lg:ml-0 max-lg:justify-center">
            <SocialNetworks />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute z-[-50] w-[10%] top-[120px] left-[56px] max-xl:w-48 max-xl:top-10 max-xl:left-[140px] max-lg:w-32 max-lg:left-[120px] max-[820px]:left-[5%] max-[820px]:top-[5%] max-[500px]:w-16"
        animate={{scale: 1.1}}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut"
        }}>
      <Image
      className="rotate-20"
        width={267}
        height={230}
        src={frame8}
        alt="diamond icon"
      />
      </motion.div>
      <motion.div
      className="absolute bottom-[7%] left-[20%] w-[15%] z-[-50] max-lg:bottom-[80px] max-lg:left-[75%] max-lg:w-[20%] max-sm:hidden"
      animate={{x: 20}}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut"

      }}
      >
      <Image
        // className="w-full"
        width={250}
        height={250}
        src={frame7}
        alt="diamond icon"
      />
      </motion.div>
    </section>
  );
};
