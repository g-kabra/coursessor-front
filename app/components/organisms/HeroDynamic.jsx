import React from "react";
import Image from "next/image";

const Hero = (props) => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-left md:text-center relative lg:max-w-[50%] xl:max-w-[40%] max-w-[90%] mx-auto">
        {!props.search && (
          <div className="text-4xl lg:text-6xl w-full lg:leading-normal leading-normal relative z-[1]">
            <Image
              src={"/images/Group 1000007479.svg"}
              width={100}
              height={100}
              className="absolute top-[-100%] left-[-10%] max-lg:hidden"
            />
            Transforming work and creativity
            <span className="text-[#6CE9BC]"> with AI</span>
          </div>
        )}
        {props.search && (
          <div className="text-4xl lg:text-6xl w-full lg:leading-normal leading-normal relative z-[1]">
            <Image
              src={"/images/Group 1000007479.svg"}
              width={100}
              height={100}
              className="absolute top-[-100%] left-[-10%] max-lg:hidden"
            />
            Searching for “
            <span className="text-[#6CE9BC]">{props.search}</span>”
          </div>
        )}
        {!props.search && (
          <p className="mt-10 md:max-w-[60%] max-w-[90%] leading-normal text-md font-light max-md:mr-auto">
            Be specific with your request. We research generative models and how
            to align them with human values.
          </p>
        )}
        {props.search && (
          <p className="mt-10 md:max-w-[60%] max-w-[90%] leading-normal text-md font-light max-md:mr-auto">
            Hang on a moment...
          </p>
        )}
      </div>
    </>
  );
};

export default Hero;
