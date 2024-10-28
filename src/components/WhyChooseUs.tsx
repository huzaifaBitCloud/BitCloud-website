import React from "react";
import {
  FaUniversity,
  FaDollarSign,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const steps = [
    {
      icon: <FaUniversity />,
      title: "VARITY COURSES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
    },
    {
      icon: <FaDollarSign />,
      title: "ATTRACTIVE PRICES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
    },
    {
      icon: <FaCalendarAlt />,
      title: "EVENTS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
    },
    {
      icon: <FaBullhorn />,
      title: "TALENTE TEACHERS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-6">
      
      <div className="grid grid-cols-2 ">
        <div>
          <h2 className="text-3xl font-bold ">Why Choose Us?</h2>
          <p className="my-7 w-[85%]">
            Accuracy: Our estimates are detailed and reliable, so you know
            exactly what to expect. Expertise: We leverage years of industry
            experience to deliver accurate results. Customer-Centric: Your needs
            are our priority. We work with you to customize estimates based on
            your unique requirements. Fast Turnaround: We value your time. Our
            streamlined process ensures you receive your estimate promptly. Our
            Vision We aim to become the go-to solution for construction
            estimates across the industry. With our commitment to quality and
            precision, we want to empower our clients to build confidently,
            knowing that their project costs are well understood from the start.
          </p>
        </div>
        <div className="flex flex-col items-start mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 relative">
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <span className="absolute left-6 top-12 h-20 w-0.5 bg-slate-400"></span>
              )}

              {/* Icon in a circle */}
              <div className="flex justify-center items-center w-12 h-12 p-3 rounded-full bg-black text-white border-[6px] border-slate-400">
                {step.icon}
              </div>

              {/* Title and Description */}
              <div className="ml-6">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
