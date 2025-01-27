import React from "react";
import {
  FaUniversity,
  FaDollarSign,
  FaCalendarAlt,
  FaBullhorn,
  FaLightbulb
} from "react-icons/fa";

const WhyChooseUs = () => {
  const steps = [
    {
      icon: <FaUniversity />,
      title: "VARIETY COURSES",
      description:
        "Explore a wide range of courses designed to meet your educational needs, from beginner to advanced levels, across multiple fields of study.",
    },
    {
      icon: <FaDollarSign />,
      title: "ATTRACTIVE PRICES",
      description:
        "Get the best value for your investment with affordable pricing and special discounts tailored for students and professionals.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "EVENTS",
      description:
        "Join exciting events, workshops, and seminars to enhance your skills and connect with like-minded learners and professionals.",
    },
    {
      icon: <FaBullhorn />,
      title: "TALENTED TEACHERS",
      description:
        "Learn from experienced and passionate teachers who bring innovative teaching methods and expertise to every session.",
    },
    {
      icon: <FaLightbulb />,
      title: "INNOVATIVE LEARNING",
      description:
        "Experience modern teaching techniques with interactive tools, real-world examples, and practical assignments to enhance your learning journey.",
    },
  ];
  
  // const steps = [
  //   {
  //     icon: <FaUniversity />,
  //     title: "VARITY COURSES",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
  //   },
  //   {
  //     icon: <FaDollarSign />,
  //     title: "ATTRACTIVE PRICES",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
  //   },
  //   {
  //     icon: <FaCalendarAlt />,
  //     title: "EVENTS",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
  //   },
  //   {
  //     icon: <FaBullhorn />,
  //     title: "TALENTE TEACHERS",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
  //   },
  //   {
  //     icon: <FaBullhorn />,
  //     title: "TALENTE TEACHERS",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam quae voluptatem voluptates asperiores iusto error quo sed nobis",
  //   },
  // ];

  return (
    <div className="w-[100%] mx-auto mt-6">
      
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 mx-2">
        <div>
          <img src="/images/about-us.jpg" alt="About us" />
        </div>
        <div className="flex flex-col items-start mx-auto h-[100%] mt-4">
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
