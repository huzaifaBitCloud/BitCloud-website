"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  const router = useRouter();

  return (
    <section id="about" className=" w-[100%] mx-auto mb-6">
      {/* HEADINGS */}
      <div
        className="relative text-white text-center py-20 rounded-md bg-cover bg-center lg:h-[65vh] md:h-[70vh] main-hero-about"
        style={{
          backgroundImage: "url('/images/web-developer.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-800 bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 sm:w-[100%] md:w-[80%] lg:w-[50%] mx-auto text-left sub-hero-about">
          <h2 className="text-4xl font-bold mb-4">
            Broaden Your Knowledge with Tutors
          </h2>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sint earum aspernatur nemo cum, nihil cupiditate eius, unde quam ab
            minima velit tenetur at. In iusto rem libero eius quaerat.
          </p>
          <div className="flex mob-btn-about gap-4">
            <button
              className="btn-about border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-800 transition"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
            <button
              className="btn-about border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-800 transition"
              onClick={() => router.push("/follow")}
            >
              Follow Us
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="mt-5 px-2">
        <h2 className="text-3xl font-bold my-6">Our Mission</h2>
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
        <hr />
        <h2 className="text-3xl font-bold ">Why Choose Us?</h2>
        <p className="my-7 w-[85%]">
          Accuracy: Our estimates are detailed and reliable, so you know exactly
          what to expect. Expertise: We leverage years of industry experience to
          deliver accurate results. Customer-Centric: Your needs are our
          priority. We work with you to customize estimates based on your unique
          requirements. Fast Turnaround: We value your time. Our streamlined
          process ensures you receive your estimate promptly. Our Vision We aim
          to become the go-to solution for construction estimates across the
          industry. With our commitment to quality and precision, we want to
          empower our clients to build confidently, knowing that their project
          costs are well understood from the start.
        </p>
      </div>
      <hr />
      <div className="my-10 ">
        <WhyChooseUs />
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
