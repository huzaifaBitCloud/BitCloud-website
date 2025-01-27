"use client";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "Building modern, responsive websites.",
      icon: <CgWebsite size={100} />, // Use the actual icon component
    },
    {
      id: 2,
      name: "Mobile Development",
      description: "Creating innovative mobile applications.",
      icon: <FaMobile size={100} />,
    },
    {
      id: 3,
      name: "UI/UX Design",
      description: "Designing user-friendly interfaces.",
      icon: <FaUsersViewfinder size={100} />,
    },
  ];

  return (
    <section id="services" className="w-[90%] mx-auto mt-5">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-16">
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 text-center">
            Our <span className="text-yellow">Services</span>
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative text-center border hover:border-red rounded-md p-2 shadow-md transition-shadow"
            style={{
              boxShadow:
                "rgba(0, 0, 255, 0.5) 5px 5px 10px 0px inset, rgba(255, 255, 255, 0.5) -5px -5px 10px 1px inset",
            }}
          >
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
    </section>
  );
};

export default Services;
