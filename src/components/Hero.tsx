import React from "react";

interface HeroProps {
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="w-[70%] mx-auto place-self-center flex flex-col items-center justify-center text-center px-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Empowering Innovation, One Line of Code at a Time.
          </h1>
          <p className="w-[70%] mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            At BitCloud Solution, we believe in transforming ideas into
            innovative solutions that drive success. Our cutting-edge software
            empowers businesses to streamline operations, boost productivity,
            and stay ahead in an ever-evolving digital world. With a commitment
            to excellence, we craft custom software that adapts to your needs,
            helping you achieve your goals faster and smarter. Let us partner
            with you to turn possibilities into realities—because your success
            is our mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
