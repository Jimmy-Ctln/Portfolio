"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import main_picture from "../../../../public/assets/profile_photos/main_picture_750w.webp";
import {SocialNetworks} from "@/components/social-networks";
import frame2 from "../../../../public/assets/diamond_frames/frame2.png"
import frame4 from "../../../../public/assets/diamond_frames/frame4.png"
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const Home = () => {
  const [size, setSize] = useState("large");

  return (
      <div id="home" className="flex items-center justify-center gap-20">
        <div className="absolute top-10 left-5">
          <Image src={frame2} alt="diamant frames"/>
        </div>
        <div className="absolute bottom-0 right-10">
          <Image src={frame4} alt="diamant frames"/>
        </div>
        <div className="flex flex-col my-80 gap-6 items-baseline">
          <h1 className="font-bold text-7xl">
            Jimmy<br></br>Catalano
          </h1>
          <h2 className="text-5xl">Développeur web</h2>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Télécharger mon CV
          </Button>
          <SocialNetworks/>
        </div>
        <>
          <Image
            className="w-461 h-461 rounded-full object-cover z-10"
            src={main_picture}
            alt="Profile photo of Jimmy Catalano"
          />
        </>
        <>
        </>
      </div>
  );
};
