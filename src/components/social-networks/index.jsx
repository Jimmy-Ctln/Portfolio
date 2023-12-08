"use client";
import React from "react";
import Image from "next/image";
import github from "public/assets/social_network_icons/github.svg";
import linkedin from "public/assets/social_network_icons/linkedin.svg";
import { motion } from "framer-motion";

export function SocialNetworks() {
  return (
    <div className="flex gap-3">
      <motion.a
        href="https://github.com/Jimmy-Ctln"
        target="_blank"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          className="w-8 h-8 cursor-pointer"
          src={github}
          alt="logo github"
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/jimmycatalano/"
        target="_blank"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          className="w-8 h-8 cursor-pointer"
          src={linkedin}
          alt="logo linkedin"
        />
      </motion.a>
    </div>
  );
}
