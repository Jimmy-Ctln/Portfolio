import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { handleScroll } from "@/utils/scroll-section";

export const NavigationVertical = ({ handleClick }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleClick();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClick]);

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full">
      <nav className="flex justify-center bg-[#0f1113] bg-opacity-90 w-full h-screen">
        <ul
          className="flex flex-col justify-center text-2xl items-center gap-10"
          ref={containerRef}
        >
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("home", -500, event);
            }}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("about-me", -40, event);
            }}
          >
            Qui suis-je ?
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("skills", -40, event);
            }}
          >
            Compétences
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("experiences", -40, event);
            }}
          >
            Expériences
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("my-work", -40, event);
            }}
          >
            Mes réalisations
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            onClick={(event) => {
              handleClick();
              handleScroll("contact", -50, event);
            }}
          >
            Contact
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};
