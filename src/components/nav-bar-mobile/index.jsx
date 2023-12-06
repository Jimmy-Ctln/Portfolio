'use client'

import React, {useState} from "react";
import Image from "next/image";
import burgerMenu from 'public/assets/icons/burger-menu.svg'
import { SocialNetworks } from "../social-networks";
import { NavigationVertical } from "../navigation-vertical";
import { motion } from 'framer-motion'

export const NavBarMobile = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      {isClicked ? (
        <NavigationVertical handleClick={handleClick}/>
      ) : (
      <div className="flex items-center justify-between">
        <div className="w-20">
            <SocialNetworks/>
        </div>
        <motion.div
        whileHover={{scale:1.2}}
        whileTap={{scale: 0.08}}
        >
          <Image src={burgerMenu} onClick={handleClick} className="w-10 cursor-pointer" width={300} height={300} alt="burgerMenu"/>
        </motion.div>
      </div>
      )}
    </>
  );
};
