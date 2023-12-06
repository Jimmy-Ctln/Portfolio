import React from "react";
import { Link } from 'react-scroll'
import { motion } from "framer-motion";

export const NavigationVertical = ({ handleClick }) => {

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full">
      <nav className="flex justify-center bg-[#0f1113] bg-opacity-90 w-full h-full">
        <ul className="flex flex-col justify-center text-2xl items-center gap-10">
        <motion.li
          whileHover={{
            scale: 1.2,
          }}
        >
          <Link
            to="home"
            onSetActive={handleSetActive}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="cursor-pointer"
            onClick={handleClick}
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
            offset={40}
            duration={500}
            spy={true}
            exact="true"
            className="cursor-pointer"
            onClick={handleClick}
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
            offset={40}
            exact="true"
            className="cursor-pointer"
            onClick={handleClick}
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
            offset={40}
            spy={true}
            exact="true"
            className="cursor-pointer"
            onClick={handleClick}
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
            onClick={handleClick}
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
            offset={40}
            spy={true}
            className="cursor-pointer"
            onClick={handleClick}
          >
            Contact
          </Link>
        </motion.li>
        </ul>
      </nav>
    </div>
  );
};


