"use client";

import React, { useEffect, useState } from "react";
import { NavBarMobile } from "../nav-bar-mobile";
import { NavBarDesktop } from "../nav-bar-desktop";

export default function Header() {
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
    <div className="w-full top-0 fixed z-50 shadow-2xl bg-gradient-to-l from-secondary max-lg:relative">
      <nav className="flex justify-end items-center p-10 max-xl:justify-center">
        {isSmallScreen ? (
          <div className="w-full">
            <NavBarMobile/>
          </div>
        ) : (
          <>
            <NavBarDesktop/>
          </>
        )}
      </nav>
    </div>
  );
}
