"use client";

import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll'
import { NavBarMobile } from "../nav-bar-mobile";
import { motion } from 'framer-motion'

export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="w-full fixed border-2 border-red-500 z-50 bg-gradient-to-l from-secondary max-lg:relative">
      <nav className="flex justify-end items-center p-10 max-xl:justify-center">
        {isSmallScreen ? (
          <div className="w-full">
            <NavBarMobile/>
          </div>
        ) : (
          <>
            <ul className="flex justify-end gap-10 max-lg:items-center">
              <motion.li
              whileHover={{
                scale: 1.2,
              }}>
                <Link to="home" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} exact='true' className='cursor-pointer'>
                  Home
                </Link>
              </motion.li>
              <motion.li
              whileHover={{
                scale: 1.2,
                
              }}>
                <Link to="about-me" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} exact='true' className='cursor-pointer'>
                  Qui suis-je ?
                </Link>
              </motion.li>
              <motion.li
              whileHover={{
                scale: 1.2,
                
              }}>
                <Link to="skills" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} exact='true' className='cursor-pointer'>
                  Compétences
                </Link>
              </motion.li>
              <motion.li
              whileHover={{
                scale: 1.2,
                
              }}>
                <Link to="experiences" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} exact='true' className='cursor-pointer'>
                  Expériences
                </Link>
              </motion.li>
              <motion.li
              whileHover={{
                scale: 1.2,
                
              }}>
                <Link to="my-work" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} exact='true' className='cursor-pointer'>
                  Réalisations
                </Link>
              </motion.li>
              <motion.li
              whileHover={{
                scale: 1.2,
                
              }}>
                <Link to="contact" onSetActive={handleSetActive} smooth={true} duration={500} spy={true} className='cursor-pointer'>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
