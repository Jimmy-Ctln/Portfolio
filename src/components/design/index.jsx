"use client";

import React from "react";
import Image from "next/image";
import frame2 from "../../../public/assets/diamond_frames/frame2.png";
import frame3 from "../../../public/assets/diamond_frames/frame3.png";
import frame4 from "../../../public/assets/diamond_frames/frame4.png";
import frame5 from "../../../public/assets/diamond_frames/frame5.png";
import frame7 from "../../../public/assets/diamond_frames/frame7.png";
import frame8 from "../../../public/assets/diamond_frames/frame8.png";
import frame9 from "../../../public/assets/diamond_frames/frame9.png";
import frame10 from "../../../public/assets/diamond_frames/frame10.png";
import frame11 from "../../../public/assets/diamond_frames/frame11.png";
import frame12 from "../../../public/assets/diamond_frames/frame12.png";
import { motion } from "framer-motion";

export const Design = () => {
  return (
    <div>
      {/* frame2 home*/}
      <motion.div
      className="absolute top-[15%] left-[5%]"
        animate={{ x: 8, y: 8 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          width={368}
          height={462}
          src={frame2}
          alt="diamond icon"
        />
      </motion.div>

      {/* Effect home */}
      <div className="w-368 h-2163 rotate-[-70deg] top-[-55%] left-[30%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[200px] rounded-full"></div>

      {/* frame3 home*/}
      <motion.div
        className="absolute top-[60%] left-[45%]"
        animate={{x: 5, z: 5}}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeIn"
        }}
      >
        <Image
          width={88}
          height={132}
          src={frame3}
          alt="diamond icon"
        />
      </motion.div>

      {/* frame4 home*/}
      <motion.div
      className="absolute top-[59%] right-[2%]"
      animate={{scale: 0.9, scale: 1.1}}
      transition={{
        repeat: Infinity,
        duration: 10,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      >
      <Image
        width={500}
        height={503}
        src={frame4}
        alt="diamond icon"
      />
      </motion.div>

      {/* frame8 aboutMe*/}
      <Image
        className="absolute rotate-20 top-[112%] left-[5%]"
        width={267}
        height={230}
        src={frame8}
        alt="diamond icon"
      />

      {/* frame7 aboutMe*/}
      <Image
        className="absolute top-[175%] left-[25%]"
        width={250}
        height={250}
        src={frame7}
        alt="diamond icon"
      />
      <div className="w-368 h-2163 rotate-[-70deg] top-[60%] left-[30%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[200px] rounded-full"></div>
      
      {/* frame9 skills*/}
      <Image
        className="absolute top-[211%] left-[57%]"
        width={200}
        height={200}
        src={frame9}
        alt="diamond icon"
      />
      
      {/* frame10 skills*/}
      <Image
        className="absolute rotate-[-90deg] top-[260%] right-[-9%]"
        width={1000}
        height={1000}
        src={frame10}
        alt="diamond icon"
      />
      {/* frame2 experiences*/}
      <Image
        className="absolute rotate-[-10deg] top-[303%] left-[10%]"
        width={368}
        height={462}
        src={frame2}
        alt="diamond icon"
      />
      
      {/* frame5 experiences*/}
      <Image
        className="absolute top-[360%] right-[2%]"
        width={368}
        height={462}
        src={frame5}
        alt="diamond icon"
      />

      {/* frame7 experiences*/}
      <Image
        className="absolute top-[400%] left-[30%]"
        width={300}
        height={300}
        src={frame7}
        alt="diamond icon"
      />

      {/* frame3 myWork*/}
      <Image
        className="absolute top-[426%] left-[1%]"
        width={150}
        height={150}
        src={frame3}
        alt="diamond icon"
      />

      {/* frame11 myWork*/}
      <Image
        className="absolute rotate-[-180deg] blur-sm top-[424%] right-[2%]"
        width={150}
        height={150}
        src={frame11}
        alt="diamond icon"
      />

      {/* frame10 myWork*/}
      <Image
        className="absolute top-[500%] left-[-7%]"
        width={600}
        height={500}
        src={frame10}
        alt="diamond icon"
      />

      {/* frame4 contact*/}
      <Image
        className="absolute top-[510%] right-[10%]"
        width={300}
        height={300}
        src={frame4}
        alt="diamond icon"
      />

      {/* frame3 contact*/}
      <Image
        className="absolute top-[560%] blur-sm left-[10%]"
        width={200}
        height={200}
        src={frame3}
        alt="diamond icon"
      />

      {/* frame12 contact*/}
      <Image
        className="absolute top-[570%] blur-lg right-[10%]"
        width={400}
        height={400}
        src={frame12}
        alt="diamond icon"
      />
      <div className="w-735 h-735 top-[-30%] right-[-25%] absolute bg-gradient-to-r from-third filter blur-[150px] rounded-full"></div>
      <div className="w-735 h-735 top-[70%] z-[-50] left-[-20%] absolute bg-gradient-to-r from-third filter blur-[100px] rounded-full"></div>
      <div className="w-735 h-735 top-[120%] z-[-50] right-[-30%] opacity-150 absolute bg-gradient-to-r from-third filter blur-[120px] rounded-full"></div>
      <div className="w-735 h-735 top-[190%] right-[-28%] absolute bg-gradient-to-r from-third filter blur-[100px] rounded-full"></div>
      <div className="w-96 h-735 top-[215%] left-[-5%] absolute bg-gradient-to-r from-third filter blur-[80px] rounded-full"></div>
      <div className="w-368 h-2163 rotate-[-70deg] top-[230%] left-[30%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[200px] rounded-full"></div>
      <div className="w-510 h-510 top-[280%] right-[-10%] z-[-50] opacity-70 absolute bg-gradient-radial-custom filter blur-[120px]"></div>
      <div className="w-96 h-2163 top-[320%] left-[-10%] absolute bg-gradient-to-r from-third filter blur-[50px] rounded-full"></div>
      <div className="w-96 h-96 top-[370%] right-[-8%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[100px] rounded-full"></div>
      <div className="w-368 h-2163 rotate-[-70deg] top-[400%] left-[30%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[100px] rounded-full"></div>
      <div className="w-368 h-2163 rotate-[-70deg] top-[500%] left-[30%] z-[-50] absolute bg-gradient-to-r from-third filter blur-[200px] rounded-full"></div>
    </div>
  );
};
