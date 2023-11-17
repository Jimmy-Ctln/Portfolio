"use client";

import React from "react";
import Image from "next/image";
import main_picture from "../../../../public/assets/profile_photos/main_picture_750w.webp";
import { SocialNetworks } from "@/components/social-networks";
import Link from "next/link";

export const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center ml-80 gap-20">
      <div className="flex flex-col my-80 gap-6 items-baseline">
        <h1 className="font-bold text-7xl">
          Jimmy<br></br>Catalano
        </h1>
        <h2 className="text-5xl">Développeur web</h2>
        <button className="font-bold flex gap-1 px-2.5 py-2.5 rounded-[10px] cursor-pointer bg-gradient-to-r from-fourth to-blue-500 opacity-100">
          <Link
            href="/assets/download/cv-jimmy-catalano.pdf"
            download="CV-Jimmy-Catalano-2023.pdf"
            target="_blank"
          >
            TÉLÉCHARGER MON CV
          </Link>
        </button>
        <SocialNetworks />
      </div>
      <>
        <Image
          className="w-461 h-461 rounded-full object-cover z-10"
          src={main_picture}
          alt="Profile photo of Jimmy Catalano"
        />
      </>
      <></>
    </section>
  );
};
