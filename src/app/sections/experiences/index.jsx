import React from "react";
import { Training } from "@/components/training";
import Image from "next/image";
import frame2 from '../../../../public/assets/diamond_frames/frame2.png'
import frame7 from '../../../../public/assets/diamond_frames/frame7.png'


export const Experiences = () => {
  return (
    <div id="experiences" className="relative mt-56">
      <div className="absolute top-[-100px] left-[10%]">
        <Image src={frame2} alt="diamond frame"/>
      </div>
      <div className="flex justify-center">
        <h3 className="text-4xl h-auto font-bold">EXPÉRIENCES</h3>
      </div>
      <div className="flex flex-col items-center mt-24 gap-10">
        <div className="relative left-60">
          <Training
            date={"2023"}
            training={"Openclassrooms"}
            description={
              <>
                Titre professionnel
                <br></br>
                Intégrateur web (BAC +2)
              </>
            }
          />
        </div>
        <div className="relative right-60">
          <Training
            date={"2021 - 2023"}
            training={"Créateur de contenus"}
            description={
              <>
                Micro-entrepreneur & créateur de
                <br></br>
                contenus sur les réseaux
              </>
            }
          />
        </div>
        <div className="relative left-60">
          <Training
            date={"2021"}
            training={"Gaming Campus"}
            description={
              <>
                Certification créateur de
                <br></br>
                contenu digitaux
              </>
            }
          />
        </div>
        <div className="relative right-60">
          <Training
            date={"2017 - 2020"}
            training={"Airbus"}
            description={'Mécanicien avion sur A350'}
          />
        </div>
        <div className="relative left-60">
          <Training
            date={"2012 - 2015"}
            training={
                <>
                  LYCÉE PROFESSIONNEL DONATION
                  <br></br>
                  ROBERT & NELLY DE ROTHSCHILD
                </>
              }
            description={
                <>
                  Baccalauréat professionnel Mécanicien
                  <br></br>
                  Systèmes Cellule
                </>
              }
          />
        </div>
      </div>
      <div className="absolute w-64 bottom-[-40px] left-[500px]">
        <Image src={frame7} alt="diamond frame"/>
      </div>
    </div>
  );
};
