"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Wrapper from "@/components/ui/Wrapper";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateInput = () => {
    let valid = true;
    let errors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      errors.name = "Name is required.";
      valid = false;
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required.";
      valid = false;
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    setLoading(true);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <Wrapper>
      <div className="py-20 mt-16 sm:w-[85vw] w-full">
        {/* Centered Heading */}
        <TextGenerateEffect words="Contact Us" className="heading" />

        {/* Contact Section */}
        <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:gap-10 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1.0, ease: "easeInOut" }}
            className="w-full xl:w-1/2 p-8 h-[35rem] sm:m-0 m-10"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
              border: "1px solid rgb(45, 55, 72)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-10">
              <p className="text-2xl -mb-4">Let's Get in touch!</p>
              <div>
                <label className="block font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white "
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block font-bold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 bg-white"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <MagicButton
                  title="Send"
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send"}
                </MagicButton>
              </div>
            </form>
          </motion.div>

          {/* Map Component */}
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1.0, ease: "easeInOut" }}
            className="w-full xl:w-1/2 flex justify-center items-center mb-8 xl:mb-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.817987621472!2d-87.71893478463283!3d41.97974857921213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc7ed8f1b0f2d%3A0xd079b33b10c4fd04!2s5500%20N%20St%20Louis%20Ave%2C%20Chicago%2C%20IL%2060645%2C%20USA!5e0!3m2!1sen!2s!4v1692466322921!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
              className="rounded-lg h-[35rem]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
