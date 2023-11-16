import React from "react";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center mt-24">
        <h3 className="text-4xl h-auto font-bold">CONTACT</h3>
      </div>
      <form className="w-full">
        <div className="flex flex-col items-center mt-14 gap-5">
          <div className="flex gap-3">
            <div className="w-1/2">
              <input
              type="text"
              id="name"
              className=" h-16 rounded-xl pl-4 bg-secondary"
              placeholder="Nom"/>
            </div>
            <div className="w-1/2">
              <input
              type="text"
              id="firstName"
              className="w-full h-16 rounded-xl pl-4 bg-secondary"
              placeholder="Prénom"/>
            </div>
          </div>
          <div className="w-1/4">
            <input
            type="email"
            id="email"
            className="w-full h-16 rounded-xl pl-4 bg-secondary"
            placeholder="Adresse e-mail"/>
          </div>
          <div className="w-1/4">
            <textarea
            id="message"
            className="w-full h-36 rounded-xl pt-4 pl-4 bg-secondary"
            placeholder="Votre message"/>
          </div>
          <div className="flex justify-center w-1/4">
            <button className="w-full p-4 rounded-xl bg-secondary" type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  );
};
