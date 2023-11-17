import React from "react";
import { Languages } from "../../../components/languages";
import data from "../../../data/data.json";

export const Skills = () => {

  return (
    <section id="skills" className="relative pt-32 pb-28">
        <div className="flex justify-center items-center">
          <h3 className="text-4xl h-auto font-bold">COMPÉTENCES</h3>
        </div>
      <div className="flex flex-col items-center gap-10 mt-20">
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
    </section>
  );
};
