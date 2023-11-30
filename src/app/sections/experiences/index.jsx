import React from "react";
import { Training } from "@/components/training";

export const Experiences = () => {
  return (
    <section id="experiences" className="relative pt-32 pb-20 border-2 border-yellow-500 max-lg:pt-8">
      <div className="flex justify-center">
        <h3 className="text-4xl h-auto font-bold max-lg:text-3xl">EXPÉRIENCES</h3>
      </div>
      <div className="flex flex-col items-center mt-24 gap-3 max-lg:mt-14 max-lg:gap-10">
        <div className="relative left-48 max-lg:left-0">
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
        <div className="relative right-48 max-lg:left-0">
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
        <div className="relative left-48 max-lg:left-0">
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
        <div className="relative right-48 max-lg:left-0">
          <Training
            date={"2017 - 2020"}
            training={"Airbus"}
            description={'Mécanicien avion sur A350'}
          />
        </div>
        <div className="relative left-48 max-lg:left-0">
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
    </section>
  );
};
