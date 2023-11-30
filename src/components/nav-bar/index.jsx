"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavBarMobile } from "../nav-bar-mobile";

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

  return (
    <div className="w-full fixed border-2 border-red-500 z-50 bg-gradient-to-r from-secondary max-lg:relative">
      <nav className="flex justify-end items-center p-10 opacity-100 max-xl:justify-center">
        {isSmallScreen ? (
          <div className="w-full">
            <NavBarMobile/>
          </div>
        ) : (
          <>
            <ul className="flex justify-end gap-10 max-lg:items-center">
              <li>
                <Link href="#home" className="cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-me" className="cursor-pointer">
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link href="#skills" className="cursor-pointer">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="cursor-pointer">
                  Expériences
                </Link>
              </li>
              <li>
                <Link href="#my-work" className="cursor-pointer">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="#contact" className="cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
