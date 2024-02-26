"use client";

import React from "react";
import Image from "next/image";
import profilePicture from "public/assets/profile_photos/profile_photo.webp";
import frame8 from "public/assets/diamond_frames/frame8.webp";
import frame7 from "public/assets/diamond_frames/frame7.webp";
import { SocialNetworks } from "@/components/social-networks";
import { handleScroll } from "@/utils/scroll-section";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-full h-full pb-52 pt-32 relative bg-secondary max-xl:px-20 max-lg:pt-28 max-md:pb-28 max-md:px-5"
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold max-lg:text-3xl">QUI SUIS-JE ?</h3>
      </div>
      <div className="flex justify-around h-full my-24 ml-24 max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:my-10 max-xl:gap-10 max-xl:mb-0 max-xl:pl-0 max-xl:ml-0">
        <div className="flex flex-col justify-center p-10 gap-y-8 w-1/2 shadow-xl bg-dark-custom bg-opacity-80 rounded-3xl max-2xl:w-9/12 max-xl:w-full max-xl:h-3/6 max-xl:gap-y-4 max-md:h-auto max-md:p-5">
          <h4 className="text-2xl max-2xl:text-lg max-md:text-base">
            HELLO MOI C&lsquo;EST{" "}
            <span className="font-bold">JIMMY CATALANO 👋</span>
          </h4>
          <p className="text-lg max-2xl:text-base max-md:text-sm">
            Mécanicien avion de formation, j&lsquo;ai rapidement bifurqué vers
            la création de contenus.
          </p>
          <p className="text-lg max-2xl:text-base max-md:text-sm">
            Passionné de jeux vidéo et d&lsquo;informatique, mon coeur a
            finalement penché pour le{" "}
            <span className="font-bold">développement web</span> qui me semblait
            une suite logique à l&lsquo;issue de ma formation en création de
            contenu digital.
          </p>
          <p className="text-lg max-2xl:text-base max-md:text-sm">
            Suite à ma reconversion avec OpenClassrooms, je suis à la
            recherche d&lsquo;un emploi en tant que{" "}
            <span className="font-bold">développeur front-end</span> dans toute la {' '}
            <span className="font-bold">France</span> !
          </p>
          <div className="flex items-end gap-5">
            <div className="flex flex-col gap-3 text-lg max-2xl:text-base max-md:text-sm">
              <p>Envie d&lsquo;en savoir plus ?</p>
              <motion.button
                className="font-bold text-base rounded-[10px] p-3 bg-gradient-to-r from-fourth to-blue-500 cursor-pointer max-md:text-sm max-md:p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                role="button"
                onClick={(event) => handleScroll("contact", null, event)}
                onKeyDown={(event) => handleScroll("contact", null, event)}
              >
                CONTACTEZ-MOI
              </motion.button>
            </div>
            <div className="flex items-end w-20 h-20 max-2xl:w-16 max-2xl:h-16 max-md:w-14 max-md:h-14">
              <SocialNetworks />
            </div>
          </div>
        </div>
        <motion.div
          className="flex flex-col items-center w-8/12 max-2xl:w-full"
          initial={{ y: 0 }}
          animate={{ y: 7 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="w-[70%] h-[80%] max-xl:h-3/6 max-sm:w-[90%]">
            <Image
              className="rounded-3xl shadow-xl"
              src={profilePicture}
              width={700}
              height={700}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="Profile photo of Jimmy Catalano"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute z-[30] w-[10%] top-[70px] left-[56px] max-xl:w-30 max-xl:top-30 max-xl:left-[120px] max-lg:w-32 max-lg:left-[3%] max-lg:top-[5%] max-md:top-[2%] max-[480px]:w-20"
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          className="rotate-20"
          width={267}
          height={230}
          src={frame8}
          alt="diamond icon"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[80px] left-[65%] w-[15%] max-xl:left-[80%] max-lg:bottom-[80px] max-lg:left-[80%] max-md:bottom-[20px] max-sm:hidden"
        animate={{ x: 15 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image width={"auto"} height={"auto"} src={frame7} alt="diamond icon" />
      </motion.div>
    </section>
  );
};
