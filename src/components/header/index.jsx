"use client";

import React from "react";
import { NavBarMobile } from "../nav-bar-mobile";
import { NavBarDesktop } from "../nav-bar-desktop";
import useWindowSize from "../hooks/useWindowSize";

export default function Header() {
  const isSmallScreen = useWindowSize(900);

  return (
    <div className="w-full top-0 fixed z-50 shadow-2xl bg-gradient-to-r from-primary to-secondary">
      <nav className="flex justify-end items-center p-10 max-xl:justify-center max-[900px]:h-10">
        {isSmallScreen ? (
          <div className="w-full h-full">
            <NavBarMobile />
          </div>
        ) : (
          <>
            <NavBarDesktop />
          </>
        )}
      </nav>
    </div>
  );
}
