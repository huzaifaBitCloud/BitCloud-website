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
        <div className="relative z-10 sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto text-center sub-hero-about">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white dark:text-white">
            Broaden Your Knowledge with Tutors
          </h2>
          <p className="mb-8 text-base md:text-lg text-white dark:text-gray-300 leading-relaxed">
           { `Expand your horizons and deepen your understanding with the help of
            expert tutors. Whether you're aiming for academic excellence,
            professional growth, or personal development, our tutors are here to
            guide you every step of the way. Let's achieve your learning goals
            together!`}
          </p>
        </div>

        {/* <div className="relative z-10 sm:w-[100%] md:w-[80%] lg:w-[50%] mx-auto text-left sub-hero-about">
          <h2 className="text-4xl font-bold mb-4">
            Broaden Your Knowledge with Tutors
          </h2>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sint earum aspernatur nemo cum, nihil cupiditate eius, unde quam ab
            minima velit tenetur at. In iusto rem libero eius quaerat.
          </p>
        </div> */}
      </div>
      <hr />

      <div className="mt-5 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Our Mission */}
        <div className="text-center">
          <h2 className="text-3xl font-bold my-6">Our Mission</h2>
          <p className="my-7 text-lg leading-relaxed max-w-3xl mx-auto">
            At <strong>BitCloud Solution</strong>, we are committed to
            simplifying the construction process by offering precise and
            detailed estimates, ensuring you stay within budget and avoid
            unnecessary costs. We strive to help homeowners, builders, and
            contractors make informed decisions by delivering fast and accurate
            quotes.
          </p>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* What We Offer */}
        <div className="text-center">
          <h2 className="text-3xl font-bold my-6">What We Offer</h2>
          <p className="my-7 text-lg leading-relaxed max-w-3xl mx-auto">
            We specialize in delivering cutting-edge software development
            services tailored to meet your business needs. From scalable web and
            mobile app development to advanced cloud solutions, we bring
            innovative ideas to life. Our expertise spans across modern
            technologies, ensuring efficient, secure, and user-friendly
            products. We also provide IT consultancy, system integration, and
            custom solutions to enhance your business operations. With a
            customer-centric approach, we are committed to driving your success
            with reliable and result-driven services. Partner with us for
            transformative digital experiences!
          </p>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold my-6">Why Choose Us?</h2>
          <p className="my-7 text-lg leading-relaxed max-w-3xl mx-auto">
            At <strong>BitCloud Solution</strong>, we pride ourselves on
            delivering exceptional results through a combination of expertise,
            innovation, and dedication. Our team of skilled professionals
            ensures top-quality solutions tailored to your unique business
            needs. We focus on building long-term relationships by providing
            reliable, timely, and cost-effective services. With a commitment to
            excellence and a customer-first approach, we strive to exceed
            expectations and help your business thrive in the digital landscape.
            Choose us for a partner you can trust to turn your vision into
            reality.
          </p>
          {/* <p className="my-7 text-lg leading-relaxed max-w-4xl mx-auto"></p> */}
        </div>
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
          className="border bg-blue-600 px-4 py-3 rounded-md text-white hover:bg-blue-700 mt-4"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;
