"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };
  const services = [
    {
      id: 1,
      name: "Email",
      description:
        "Fastest growing AI-powered business intelligence for identifying risk in auto industry",
      icon: <MdEmail size={100} />,
    },
    {
      id: 2,
      name: "Whatsapp",
      description:
        "Empower businesses through cutting-edge big data services using cloud solutions",
      icon: <IoLogoWhatsapp size={100} />,
    },
    {
      id: 3,
      name: "Linkedin",
      description:
        "Empower businesses through cutting-edge big data services using cloud solutions",
      icon: <FaLinkedin size={100} />,
    },
  ];
  return (
    <div className="">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://static.zohocdn.com/sites/stock-images/images/zpstock-image-37.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
          <div className="w-[70%] mx-auto place-self-center flex flex-col items-center justify-center text-center px-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Get In Touch
            </h1>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white text-center border hover:border-red rounded-md p-6 shadow-lg transition-shadow -top-[40%] "
              >
                {/* bg-gradient-to-b from-[#00000099] via-[#00000055] to-[#00000000] */}
                <div className="z-10">
                  <div className="w-full flex justify-center">
                    {/* Render the icon directly */}
                    {service.icon}
                  </div>

                  <h3 className="font-playfair font-semibold text-[25px] mt-3">
                    {service.name}
                  </h3>
                  <p className="font-playfair font-semibold text-[17px] flex justify-center mt-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* contact us */}
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto w-[90%] grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
              Message Us
            </h2>
            <p className="mb-8 lg:mb-12 font-light text-center text-black w-[60%] mt-10">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <div>
            <h1 className="font-bold text-xl">Lahore, Pakistan</h1>
            <p>naeem@bitcloudsolution.com</p>
          </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;