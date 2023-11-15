import React from "react";
import Image from "next/image";
import { Languages } from "../../../components/languages";
import data from "../../../data/data.json";
import frame9 from '../../../../public/assets/diamond_frames/frame9.png'
import frame10 from '../../../../public/assets/diamond_frames/frame10.png'

export const Skills = () => {

  return (
    <div id="skills" className="w-full relative">
      <div className=" absolute left-686px top-600px rotate-[-90deg]">
        <Image src={frame10} alt="diamond frame"/>
      </div>
        <div className="flex justify-center items-center">
          <h3 className="text-4xl h-auto font-bold">COMPÉTENCES</h3>
          <div className="w-48 h-48 relative bottom-0">
            <Image src={frame9} alt="diamond frame"/>
          </div>
        </div>
      <div className="flex flex-col items-center gap-20 mt-20">
        <div className="flex flex-col gap-5 relative right-64">
          <h4>INTÉGRATION</h4>
          <div className="flex gap-8 w-96 h-auto rounded-2xl justify-center py-3.5 px-3  bg-secondary p">
            {data.languages.integration.map((language) => (
              <Languages
                key={language.id}
                name={language.name}
                src={language.src}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 relative left-64">
          <h4>FRONTEND</h4>
          <div className="flex gap-8 w-96 h-auto rounded-2xl justify-center py-3.5 px-3 bg-secondary p">
            {data.languages.frontend.map((language) => (
              <Languages
                key={language.id}
                name={language.name}
                src={language.src}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 relative right-64">
          <h4>BACKEND</h4>
          <div className="flex gap-8 w-96 h-102.78 rounded-2xl justify-center py-3.5 px-3 bg-secondary p">
            <div className="flex items-center">
              <p>EN COURS...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
