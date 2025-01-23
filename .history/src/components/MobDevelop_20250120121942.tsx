"use client";
import React from "react";
import RecentProjects from "./Reuseable/RecentProject";

const MobDevelop = () => {
  const mobileDesc = [
    {
      title: "Custom Mobile App Development",
      description:
        "Building user-friendly mobile applications tailored to your business needs and user preferences.",
      image: "/images/mb1.jpg",
    },
    {
      title: "App Maintenance & Support",
      description:
        "Providing ongoing maintenance and updates to keep your app running smoothly and securely.",
      image: "/images/3d1.jpg",
    },
    {
      title: "UI/UX Design for Mobile",
      description:
        "Creating intuitive and engaging user interfaces that enhance user experience on mobile devices.",
      image: "/images/ui.jpg",
    },
    {
      title: "Mobile App Optimization",
      description:
        "Ensuring your mobile app performs optimally, with fast load times and smooth navigation.",
      image: "/images/optimization.jpg",
    },
    {
      title: "Cross-Platform Solutions",
      description:
        "Developing applications that run seamlessly on both iOS and Android platforms, maximizing reach and engagement.",
      image: "/images/cress.jpg",
    },
    {
      title: "Integration with Third-Party Services",
      description:
        "Seamlessly integrating your mobile app with other services and APIs to enhance functionality.",
      image: "/images/third-party.jpg",
    },
  ];
  
  return (
    <>
      <div
        className="overlay-primary-dark bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('/images/responsive web image.png')",
        }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-amber-500/25 bg-gradient-to-r from-[#0938CF] to-[#13CFC7]">
          Mobile Development & Updates
        </h1>

        {/* Introduction Section */}
        <section className="mb-12 text-center">
          <p className="text-lg text-white max-w-2xl mx-auto">
            Our mobile development services are designed to help businesses create high-quality, user-friendly, and scalable mobile applications. Whether you need a native app or a cross-platform solution, we offer a wide range of services tailored to meet your unique needs.
          </p>
        </section>
      </div>
      <div className="container mx-auto px-4 py-10">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
            Our Mobile Development Services
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileDesc.map((service, index) => (
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

        <RecentProjects />

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Let's Build Your Next Mobile App
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to get started? Contact us to discuss your mobile development needs and how we can help bring your vision to life.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </>
  );
};

export default MobDevelop;
