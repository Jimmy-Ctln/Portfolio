import React from "react";
import Image from "next/image";
import profilePicture from "../../../../public/assets/profile_photos/profile_photo_800w.jpg";
import frame7 from "../../../../public/assets/diamond_frames/frame7.png";
import frame8 from "../../../../public/assets/diamond_frames/frame8.png";
import { SocialNetworks } from "../../../components/social-networks";

export const AboutMe = () => {
  return (
    <div className="AboutMe-Container">
      <div className="text-center">
        <div className="absolute w-52 h-52 top-60rem left-8rem rotate-20">
          <Image src={frame8} alt="diamant frames" />
        </div>
        <h1 className="text-5xl font-bold">QUI SUIS-JE ?</h1>
      </div>
      <div className="flex justify-around my-20">
        <div className="flex flex-col gap-y-4 w-500">
          <h3 className="text-2xl font-bold">MOI C&lsquo;EST JIMMY CATALANO</h3>
          <p className="text-lg">
            Mécanicien avion de formation, j&lsquo;ai rapidement bifurqué{" "}
            <br></br> vers la création de contenus.
          </p>
          <p className="text-lg">
            Passionné de jeux vidéo et d&lsquo;informatique, mon coeur a
            finalement penché pour le développement web qui me semblait une
            suite logique à l&lsquo;issue de ma formation en création de contenu
            digital.
          </p>
          <div className="mt-4 ml-44">
            <Image src={frame7} alt="diamant frames" />
          </div>
        </div>
        <div className="w-590">
          <Image
            className="rounded-45"
            src={profilePicture}
            alt="Profile photo of Jimmy Catalano"
          />
          <div className="mt-5 ml-10">
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  );
};
