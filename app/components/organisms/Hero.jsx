import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-left md:text-center relative lg:max-w-[50%] xl:max-w-[40%] max-w-[90%] mx-auto">
        <div className="text-4xl lg:text-6xl w-full leading-normal relative z-[1]">
          <Image
            src={"/images/Group 1000007479.svg"}
            width={100}
            height={100}
            className="absolute top-[-100%] left-[-10%] max-lg:hidden"
          />
          Transforming work and creativity{" "}
          <span className="text-[#6CE9BC]">with AI</span>
        </div>
        <p className="mt-10 md:max-w-[60%] max-w-[90%] leading-normal text-md font-light max-md:mr-auto">
          Be specific with your request. We research generative models and how
          to align them with human values.
        </p>
        <button className="mt-10 border-[0.5px] rounded-xl text-[#6CE9BC] border-[#6CE9BC] hover:bg-[#6CE9BC] hover:text-white transition-all py-4 px-6 max-md:mr-auto">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
