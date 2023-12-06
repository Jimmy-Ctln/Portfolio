'use client'

import React from "react";
import { Link } from 'react-scroll'
import { motion } from "framer-motion";

export const NavBarDesktop = () => {

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <ul className="flex justify-end gap-10 max-lg:items-center">
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="home"
          onSetActive={handleSetActive}
          offset={-500}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="cursor-pointer"
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="about-me"
          onSetActive={handleSetActive}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="cursor-pointer"
        >
          Qui suis-je ?
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="skills"
          onSetActive={handleSetActive}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="cursor-pointer"
        >
          Compétences
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="experiences"
          onSetActive={handleSetActive}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="cursor-pointer"
        >
          Expériences
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="my-work"
          onSetActive={handleSetActive}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="cursor-pointer"
        >
          Réalisations
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link
          to="contact"
          onSetActive={handleSetActive}
          smooth={true}
          duration={500}
          spy={true}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};
