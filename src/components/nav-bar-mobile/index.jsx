'use client'

import React, {useState} from "react";
import Image from "next/image";
import burgerMenu from '../../../public/assets/icons/burger-menu.svg'
import { SocialNetworks } from "../social-networks";
import { DisplayNavBar } from "../display-nav-bar";

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
        <div>
            <Image src={burgerMenu} onClick={handleClick} className="w-14 cursor-pointer" width={300} height={300} alt="burgerMenu"/>
        </div>
      </div>
      )}
    </>
  );
};
