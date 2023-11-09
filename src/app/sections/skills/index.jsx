import React from "react";
import { Languages } from "../../../components/languages";
import data from "../../../data/data.json";

export const Skills = () => {
  let coucou = "coucou";
  console.log(coucou);
  return (
    <div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">COMPÉTENCES</h3>
        </div>
      <div className="flex flex-col gap-10 w-1/2">
        <div className="flex flex-col ml-40 gap-5 w-full">
          <h4>INTÉGRATION</h4>
          <div className="flex gap-10 h-auto rounded-2xl justify-center p-2 bg-rectangle p">
            {data.languages.integration.map((language) => (
              <Languages
                key={language.id}
                name={language.name}
                src={language.src}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 ml-96 w-full">
          <h4>FRONTEND</h4>
          <div className="flex gap-10 h-auto rounded-2xl justify-center p-2 bg-rectangle p">
            {data.languages.frontend.map((language) => (
              <Languages
                key={language.id}
                name={language.name}
                src={language.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
