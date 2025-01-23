"use client";
import React from "react";
import RecentProjects from "./Reuseable/RecentProject";

const WebDev = () => {
  const webDesc = [
    {
      title: "Custom Web Design",
      description:
        "Creating unique, engaging designs that resonate with your audience and reflect your brand identity.",
      image: "/images/custom web design.png",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing robust online stores with seamless checkout experiences and secure payment gateways.",
      // image: "/images/image1.jpg",
      image: "/images/e-commerce solutions.jpg",
    },
    {
      title: "Full Stack Application",
      description:
        "Implementing and Developing custom solutions and designs based on customers requirments.",
      image: "/images/web-developer.jpg",
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring your website looks and functions beautifully across all devices.",
      image: "/images/responsive web image.png",
    },
    {
      title: "SEO Optimization",
      description:
        "Optimizing your website to rank better on search engines and drive organic traffic.",
      image: "/images/seo image.jpg",
    },
    {
      title: "Maintenance & Support",
      description:
        "Providing ongoing support to keep your site updated, secure, and performing optimally.",
      image: "/images/image2.jpg",
    },
  ];
  return (
    <>
      <div
        className="overlay-primary-dark bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('/images/web.jpg')",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0938CF] to-[#13CFC7]">
          Web Development & Updates
        </h1>

        {/* Introduction Section */}
        <section className="mb-12 text-center">
          <p className="text-lg text-white max-w-2xl mx-auto">
            Our web development services are designed to help businesses build
            high-quality, user-friendly, and scalable websites that drive
            results. From custom CMS solutions to responsive designs, we offer a
            wide range of web development solutions tailored to meet your unique
            needs.
          </p>
        </section>
      </div>
      <div className="container mx-auto px-4 py-10">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
            Our Web Development Services
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDesc.map((service, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-md text-center card-services"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Our Recent Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Project Alpha",
              description:
                "A responsive, high-performance e-commerce website for a fashion brand.",
              image: "/images/mobile-app.jpg",
            },
            {
              name: "Beta CMS",
              description:
                "A custom CMS built for a publishing company to manage and publish content effortlessly.",
              image: "/images/contact-image.jpeg",
            },
            {
              name: "Gamma Web App",
              description:
                "A progressive web app for a tech startup, designed with user experience and performance in mind.",
              image: "/images/mobile-app.jpg",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md text-center recent-projects-cards"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">
                {project.name}
              </h3>
              <p className="">{project.description}</p>
            </div>
          ))}
        </div>
      </section> */}

        <RecentProjects />

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Let's Build Your Next Project
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to get started? Contact us to discuss your web development
            needs and how we can help bring your vision to life.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </>
  );
};

export default WebDev;
