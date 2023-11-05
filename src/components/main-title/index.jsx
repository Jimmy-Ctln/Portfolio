'use client'

import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import profilePicture from "../../../public/assets/photo_de_profile_750w.webp";
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const MainTitle = () => {

  const [size, setSize] = useState('large');

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex flex-col my-80 gap-6 items-baseline">
        <h1 className="font-bold text-7xl">
          Jimmy<br></br>Catalano
        </h1>
        <h2 className="text-5xl">Développeur web</h2>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Télécharger mon CV
        </Button>
      </div>
      <div>
        <Image
          className="w-461 h-461 rounded-full object-cover"
          src={profilePicture}
          alt="Photo de profil de Jimmy Catalano"
        />
      </div>
    </div>
  );
};
