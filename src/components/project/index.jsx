import React, { lazy } from "react";
import Image from "next/image";
import github from "public/assets/social_network_icons/github.svg";
import { motion } from "framer-motion";

export const Project = ({ name, image, alt, description, href }) => {
  return (
    <div className="rounded-2xl flex justify-center">
      <div className="relative w-[90%] h-[500px] max-[500px]:h-[400px] max-[425px]:h-[350px] shadow-xl">
        <Image
          className="rounded-2xl w-full cursor-pointer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          width={700}
          height={700}
          src={image}
          alt={alt}
          priority={true}
          onClick={() => window.open(href, "_blank")}
        />

        <div className="absolute bottom-0 w-full h-auto bg-gradient-to-b from-secondary to-third rounded-b-xl">
          <div className="flex flex-col justify-center p-5 gap-5 max-[500px]:p-3 max-[500px]:gap-2">
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg max-[600px]:text-sm">{name}</p>
              <motion.a
                className="w-7 max-[600px]:w-5"
                href={href}
                target="_blank"
                whileTap={{ scale: 0.08 }}
              >
                <Image src={github} alt="logo github" />
              </motion.a>
            </div>
            <p className="text-base max-[600px]:text-xs">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
