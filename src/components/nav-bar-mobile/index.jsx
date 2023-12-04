'use client'

import React, {useState} from "react";
import Image from "next/image";
import burgerMenu from '../../../public/assets/icons/burger-menu.svg'
import { SocialNetworks } from "../social-networks";
import { DisplayNavBar } from "../display-nav-bar";
import { motion } from 'framer-motion'

export const NavBarMobile = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      {isClicked ? (
        <DisplayNavBar handleClick={handleClick}/>
      ) : (
      <div className="flex items-center justify-between">
        <div>
            <SocialNetworks/>
        </div>
        <motion.div
        whileHover={{scale:1.2}}
        whileTap={{scale: 0.08}}
        >
            <Image src={burgerMenu} onClick={handleClick} className="w-14 cursor-pointer" width={300} height={300} alt="burgerMenu"/>
        </motion.div>
      </div>
      )}
    </>
  );
};
