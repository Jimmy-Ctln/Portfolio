import React from "react";
import Image from "next/image";
import profilePicture from "../../../../public/assets/profile_photos/profile_photo_800w.jpg";
import { SocialNetworks } from "../../../components/social-networks";

export const AboutMe = () => {
  return (
    <section id="about-me" className="pt-32 pb-20">
      <div className="text-center">
        <h3 className="text-4xl font-bold">QUI SUIS-JE ?</h3>
      </div>
      <div className="flex justify-around my-40">
        <div className="flex flex-col gap-y-4 w-500 mt-20">
          <h3 className="text-2xl font-bold">MOI C&lsquo;EST JIMMY CATALANO</h3>
          <p className="text-lg">
            Mécanicien avion de formation, j&lsquo;ai rapidement bifurqué
            vers la création de contenus.
          </p>
          <p className="text-lg">
            Passionné de jeux vidéo et d&lsquo;informatique, mon coeur a
            finalement penché pour le développement web qui me semblait une
            suite logique à l&lsquo;issue de ma formation en création de contenu
            digital.
          </p>
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
    </section>
  );
};
