"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import house from "public/assets/icons/house.svg";
import { handleScroll } from "@/utils/scroll-section";

export const NavBarDesktop = () => {
  return (
    <ul className="fixed flex justify-end gap-10 max-lg:items-center">
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("home", -500, event)}
        onKeyDown={(event) => handleScroll("home", -500, event)}
      >
        <Image src={house} className="w-[18px] h-[18px]" alt="house icon" />
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("about-me", null, event)}
        onKeyDown={(event) => handleScroll("about-me", null, event)}
      >
        Qui suis-je ?
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("skills", null, event)}
        onKeyDown={(event) => handleScroll("skills", null, event)}
      >
        Compétences
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("experiences", null, event)}
        onKeyDown={(event) => handleScroll("experiences", null, event)}
      >
        Expériences
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("my-work", null, event)}
        onKeyDown={(event) => handleScroll("my-work", null, event)}
      >
        Mes réalisations
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
        className="cursor-pointer"
        tabIndex={0}
        onClick={(event) => handleScroll("contact", null, event)}
        onKeyDown={(event) => handleScroll("contact", null, event)}
      >
        Contact
      </motion.li>
    </ul>
  );
};
