"use client";

import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const myServiceID = process.env.NEXT_PUBLIC_MY_SERVICE_ID;
  const myTemplateID = process.env.NEXT_PUBLIC_MY_TEMPLATE_ID;
  const myPublicKey = process.env.NEXT_PUBLIC_MY_PUBLIC_KEY;

  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState();

  const [formData, setFormData] = useState({
    user_name: "",
    user_firstName: "",
    user_email: "",
    message: "",
  });

  const displayMessage = (message) => {
    setMessage(message);

    setTimeout(() => {
      setMessage("");
      setIsSuccess(null);
    }, 3000);
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
      displayMessage("Merci de remplir tous les champs du formulaire");
      setIsSuccess(false);
      return;
    } else {
      emailjs
        .sendForm(myServiceID, myTemplateID, form.current, myPublicKey)
        .then(
          (result) => {
            console.log(result.text);
            displayMessage("Le formulaire a été envoyé avec succès !");
            setIsSuccess(true);
          },
          (error) => {
            console.log(error.text);
            displayMessage(
              "Une erreur est survenue lors de lenvoie du formulaire !"
            );
            setIsSuccess(false);
          }
        );
      setFormData({
        user_name: "",
        user_firstName: "",
        user_email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="pb-40 relative pt-28 bg-five max-lg:mt-0 max-lg:pt-24 bg-secondary"
    >
      <div className="flex justify-center max-lg:mt-0">
        <h3 className="text-4xl h-auto font-bold max-lg:text-3xl">CONTACT</h3>
      </div>
      <div className="flex flex-col max-w-[900px] mx-auto mt-14 max-lg:w-full max-sm:mt-8">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 px-2"
        >
          <div
            className={`${
              isSuccess === false
                ? "bg-red-700"
                : isSuccess === true
                ? "bg-green-700"
                : ""
            } w-[90%] mx-auto rounded-xl text-center p-3 `}
          >
            {message && <p className="text-base max-sm:text-xs">{message}</p>}
          </div>
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
          <div>
            <div className="flex justify-center max-sm:text-xs">
              <motion.button
                className="w-full p-4 rounded-xl bg-dark-custom bg-opacity-80"
                type="submit"
                key={isSuccess}
                animate={{
                  x: isSuccess === false ? 10 : 0,
                }}
                transition={{
                  repeat: 3,
                  duration: 0.05,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                Envoyer
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
