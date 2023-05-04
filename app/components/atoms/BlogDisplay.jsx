import React from "react";
import Arrow from "./ArrowLink";
import Image from "next/image";

const BlogDisplay = (props) => {
  return (
    <div
      className={`flex flex-col text-left ${props.className} max-md:mt-10 w-full`}
    >
      <div className="flex md:flex-col gap-4 items-center w-full">
        <div className="w-[30%] md:w-full object-cover aspect-square outline outline-1 outline-[#6CE9BC] relative">
          <Image
            src={props.imageLink}
            alt=""
            className="h-full"
            fill
          />
        </div>
        <h1 className="text-lg md:text-2xl leading-normal md:mt-10">
          {props.heading}
        </h1>
        <Arrow
          link={""}
          className="text-[#6CE9BC] text-sm md:hidden font-light"
          arrowClasses="rotate-45"
          arrowColor="#6CE9BC"
        ></Arrow>
      </div>
      <p className="font-light leading-normal md:mt-10 mt-4">{props.content}</p>
      <div className="flex">
        <Arrow
          link={""}
          className="text-[#6CE9BC] text-sm mt-10 font-light max-md:hidden"
          arrowColor="#6CE9BC"
        >
          {props.linkText}
        </Arrow>
      </div>
    </div>
  );
};

export default BlogDisplay;
