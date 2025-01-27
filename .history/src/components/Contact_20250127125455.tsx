"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import emailjs from "emailjs-com";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: email,
      to_name: "Naeem Amjad",
      subject,
      message,
    };

    try {
      await emailjs.send(
        "service_h8co5gg",
        "template_hwt3j6o",
        templateParams,
        "3-7czTUd-XSt6ifVk"
      );

      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };
  const cards = [
    {
      id: 1,
      title: "Whatsapp",
      description:
        "Ready to team up? Excited to explore opportunities together.",
      icon: <IoLogoWhatsapp className="w-14 h-14 text-white" />,
      // bgGradient: "",
      link: "https://wa.me/03217025010",
      // className: "custom-cards-ourClient",
    },
    {
      id: 2,
      title: "Email",
      description: "Have a project in mind? Reach out to us and let's discuss.",
      icon: <MdEmail className="w-14 h-14 text-white" />,
      // bgGradient: "from-red-50 to-red-100",
      link: "mailto:rehancricket33@gmail.com",
      // className: "custom-card-2-achievements",
    },
    {
      id: 3,
      title: "Linkedin",
      description: "Let's connect and explore exciting opportunities together.",
      icon: <FaLinkedin className="w-14 h-14 text-white" />,
      // bgGradient: "from-gray-50 to-gray-100",
      link: "https://www.linkedin.com/company/bitcloud-solution-software/",
      className: "custom-card-3-achievements",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group`}
            >
              <div
                className={`bg-gradient-to-r  p-10 rounded-2xl  text-center transform transition duration-500 group-hover:scale-105 `}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <div className="flex justify-center items-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="text-white mt-4 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* contact us */}
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto w-[90%] grid md:grid-cols-2 gap-10">
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
                placeholder="Please tell us a bit more about what you're looking for"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="py-6 px-4 sm:px-6 md:px-10 lg:pl-14 text-left">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Lahore, Pakistan
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            naeem@bitcloudsolution.com
          </p>
        </div>

        {/* <div className="py-6 justify-start pl-14">
          <h1 className="font-bold text-xl flex ">
            Lahore, Pakistan
          </h1>
          <p className="flex ">naeem@bitcloudsolution.com</p>
        </div> */}
      </section>
    </div>
  );
};

export default Contact;
