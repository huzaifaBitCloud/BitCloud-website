"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WhyChooseUs from "./WhyChooseUs";


const About = () => {
  const router = useRouter();

  return (
    <section id="about" className=" w-[90%] mx-auto mt-4 mb-6">
      {/* HEADINGS */}
      <div className="text-left my-12">
        <p className="font-playfair font-bold text-4xl">
          <span className="mr-2">About</span>us
        </p>
      </div>

      <div className="mt-5">
        <p className="my-7">
          Welcome to [Your Company Name], your trusted partner for accurate and
          reliable construction estimates. We specialize in providing
          comprehensive cost assessments for all your construction needs, from
          doors and windows to complete living spaces like TV lounges, kitchens,
          and more.
        </p>
        <hr />
        <h2 className="text-3xl font-bold text-right my-6">Our Mission</h2>
        <p className="my-7">
          At [Your Company Name], we are committed to simplifying the
          construction process by offering precise and detailed estimates,
          ensuring you stay within budget and avoid unnecessary costs. We strive
          to help homeowners, builders, and contractors make informed decisions
          by delivering fast and accurate quotes.
        </p>

        <hr />
        <h2 className="text-3xl font-bold text-left my-6">What We Offer</h2>
        <p className="my-7">
          Our team of experts offers estimates for: Doors & Windows:
          Installation costs, material choices, and design options. TV Lounges:
          Complete cost breakdowns, including flooring, wall finishing, and
          more. Bedrooms & Living Spaces: Detailed estimation for materials,
          labor, and time. Kitchens: Custom estimates for cabinets, countertops,
          and appliances. Bathrooms: Cost assessments for fixtures, tiles,
          plumbing, and more. Exterior Elements: Including patios, landscaping,
          fencing, and driveway estimates.
        </p>
      </div>
      <hr />
      <div className="my-10 ">
        <WhyChooseUs/>
      </div>
      <div className="text-center my-20">
        <h3 className="text-xl font-bold">
          Want to learn more about BitCloud Solutions?
        </h3>
        <p className="text-lg font-semibold mt-1">
          We’d love to hear from you.
        </p>
        <button
          className="border bg-blue-600 px-4 py-3 rounded-md text-white hover:bg-blue-700 mt-2"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;
