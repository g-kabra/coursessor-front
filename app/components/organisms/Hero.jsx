import { React, useEffect, useState } from "react";
import Image from "next/image";
import Cover from "../design/Cover";

const Hero = () => {
  return (
    <>
      <div className="lg:h-screen flex flex-col justify-center items-center text-left md:text-center relative lg:max-w-[50%] xl:max-w-[40%] max-w-[90%] mx-auto">
        <Cover className="flex flex-col items-center justify-center">
          <div className="text-4xl lg:text-7xl w-full leading-normal relative z-[1]">
            Transforming education <span className="text-[#6CE9BC]">with AI</span>
          </div>
          <p className="mt-10 md:max-w-[60%] max-w-[90%] leading-normal text-md lg:text-lg font-light max-md:mr-auto">
            Coursessor uses LLMs to personalize learning by analyzing a
            student&apos;s writing, providing customized feedback, and
            recommending personalized learning resources.
          </p>
        </Cover>
        <button className="mt-10 border-[0.5px] text-xl font-light rounded-xl text-[#6CE9BC] border-[#6CE9BC] hover:bg-[#6CE9BC] hover:text-white transition-all py-4 px-8 max-md:mr-auto">
          Get Started
        </button>
        <Image
          src={"/images/ScrollMouse.svg"}
          width={28.65}
          height={45.92}
          className={`absolute mt-20 right-0 left-0 mx-auto bottom-32 mt-20 z-[2] hidden md:block`}
          alt="mouseScroll"
        />
      </div>
    </>
  );
};

export default Hero;
