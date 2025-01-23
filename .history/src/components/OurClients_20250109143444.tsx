import React from "react";

const OurClients = () => {
  const services = [
    {
      id: 1,
      description:
        "Fastest growing AI-powered business intelligence for identifying risk in auto industry",
      icon: "./images/Bluewire-Logo.png", // Use the actual icon component
    },
    {
      id: 2,
      description:
        "Empower businesses through cutting-edge big data services using cloud solutions",
      icon: "./images/chaleman.png",
    },
  ];

  return (
    <section id="services" className="xs:w-full sm:w-full lg:w-[90%] mx-auto my-5 bg-[#f5f7fa] px-4 py-2">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-16">
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 text-center">
            Our <span className="text-yellow">CLients</span>
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between  mt-16 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative text-center p-10 xs:w-full sm:w-full lg:w-[90%] custom-cards-ourClient"
          >
            <div className="z-10">
              <div className="w-full flex justify-center ">
                <div className="w-[200px] h-[70px]">
                  <img
                    src={service.icon}
                    alt="client-img"
                    className="object-contain"
                  />
                </div>
              </div>
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

export default OurClients;
