import React from "react";
import { FcCollaboration } from "react-icons/fc";
import { CgCommunity } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcIdea } from "react-icons/fc";
import { SiMusicbrainz } from "react-icons/si";
import { RiHonourFill } from "react-icons/ri";

const WhyUs = () => {
  const services = [
    {
      id: 1,
      name: "Integrity",
      description: "We are committed to the highest ethical standards.",
      icon: <RiHonourFill size={100} />,
    },
    {
      id: 2,
      name: "Excellence",
      description:
        "We challenge ourselves to do our best work and commit to continual improvement and excellence.",
      icon: <SiMusicbrainz size={100} />,
    },
    {
      id: 3,
      name: "Innovation",
      description:
        "We question the status quo and look at challenges in new ways. Our curiosity drives creativity, new ideas and innovation.",
      icon: <FcIdea size={100} />,
    },
    {
      id: 4,
      name: "Collaboration",
      description:
        "Teamwork inspires us to be the best at what we do. Together we build a respectful, friendly and collaborative work environment that opens doors to professional and personal growth.",
      icon: <FcCollaboration size={100} />,
    },
    {
      id: 5,
      name: "Community",
      description:
        "Our goal every single day is to help our co-workers, customers and partners succeed and to do what’s best for others in our community.",
      icon: <CgCommunity size={100} />,
    },
    {
      id: 6,
      name: "Global",
      description:
        "Our business knows no borders, and our community knows no boundaries. We are a global team working together to support our customers and the millions of consumers around the globe who rely on us to deliver world-class solutions.",
      icon: <AiOutlineGlobal size={100} />,
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
         <h2 className="text-3xl font-bold text-center mt-10 mb-5">Why Choose Us?</h2>
      <div className="w-[90%] mx-auto mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-white text-center ${
                index >= 0
                  ? index == 0 || index == 3
                    ? index == 3
                      ? ""
                      : "border-b"
                    : index > 3
                    ? "border-l"
                    : "border-l border-b"
                  : ""
              } hover:border-red p-6`}
            >
              <div className="z-10">
                <div className="w-full flex justify-center">{service.icon}</div>

                <h3 className="font-playfair font-semibold text-[25px] mt-3">
                  {service.name}
                </h3>
                <p className="font-playfair text-[14px] flex justify-center mt-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
