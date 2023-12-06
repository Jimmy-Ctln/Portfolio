"use client";

import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const myServiceID = process.env.NEXT_PUBLIC_MY_SERVICE_ID;
  const myTemplateID = process.env.NEXT_PUBLIC_MY_TEMPLATE_ID;
  const myPublicKey = process.env.NEXT_PUBLIC_MY_PUBLIC_KEY;

  const form = useRef();
  const [errorForm, setErrorForm] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_firstName: "",
    user_email: "",
    message: "",
  });

  const error = () => {
    setErrorForm(true);

    setTimeout(() => {
      setErrorForm(false);
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formData.user_name.trim() === "" ||
      formData.user_firstName.trim() === "" ||
      formData.user_email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      error();
      return;
    } else {
      emailjs
        .sendForm(myServiceID, myTemplateID, form.current, myPublicKey)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            console.log(error)
          }
        );
      setFormData({
        user_name: "",
        user_firstName: "",
        user_email: "",
        message: "",
      });
      setErrorForm(false);
    }
  };

  return (
    <section id="contact" className="pb-96 mt-20 pt-60 bg-five max-lg:mt-0 max-lg:pt-8 bg-secondary"
    >
      <div className="flex justify-center max-lg:mt-0">
        <h3 className="text-4xl h-auto font-bold max-lg:text-3xl">CONTACT</h3>
      </div>
      <div className="flex flex-col mt-14 max-lg:mt-14">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 max-w-6xl mx-auto px-5">
          <div className="flex gap-2 max-sm:text-xs">
            <div className="flex w-full justify-end">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                className="w-full rounded-xl py-3 px-4 bg-dark-custom bg-opacity-80"
                placeholder="Nom"
              />
            </div>
            <div className="flex w-full justify-start max-sm:text-xs">
              <input
                type="text"
                name="user_firstName"
                value={formData.user_firstName}
                onChange={handleInputChange}
                className="w-full rounded-xl py-3 px-4 bg-dark-custom bg-opacity-80"
                placeholder="Prénom"
              />
            </div>
          </div>
          <div className="flex justify-center max-sm:text-xs">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="w-full rounded-xl py-3 px-3 bg-dark-custom bg-opacity-80"
              placeholder="Adresse e-mail"
            />
          </div>
          <div className="flex justify-center max-sm:text-xs">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full h-52 rounded-xl px-3 py-5 bg-dark-custom bg-opacity-80"
              placeholder="Votre message"
            />
          </div>
          {errorForm ? (
            <div>
              <div className="flex justify-center max-sm:text-xs">
                <button
                  className="w-full p-4 rounded-xl bg-dark-custom bg-opacity-80"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
              <div className="flex justify-center text-center mt-5 mx-10">
                <p className="font-bold text-red-500">
                  Merci de remplir tous les champs du formulaire !
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center max-sm:text-xs">
              <button
                className="w-full p-4 rounded-xl bg-dark-custom bg-opacity-80"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
