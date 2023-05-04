import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 mb-10 w-[90%] mx-auto max-md:items-center mt-10">
      <h1 className="text-xl font-medium">Coursessor</h1>
      <div className="w-full flex justify-between text-sm font-light max-md:items-center">
        <p className="w-[20%] max-md:hidden">
          We research generative models and how to align them with human values.
        </p>
        <div className="flex gap-8 max-md:w-full justify-center">
          <Link href="">Home</Link>
          <Link href="">Research</Link>
          <Link href="">About</Link>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
      <hr className="max-md:hidden border-[#2F2F2F]" />
      <div className="flex justify-between max-md:flex-col-reverse gap-10 max-md:text-center max-md:items-center max-md:mt-5">
        <p className="text-sm font-light">All Rights Reserved</p>
        <hr className="md:hidden border-[#2F2F2F] w-[90vw]" />
        <div className="flex gap-3">
          <Link href={"#"}>
            <div className="rounded-[50%] p-[10px] bg-[#6CE9BC1a]">
              <div className="h-[20px] w-[20px] relative">
                <Image
                  src={"/images/twitterLogo.svg"}
                  alt=""
                  className=""
                  fill
                />
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="rounded-[50%] p-[10px] bg-[#6CE9BC1a]">
              <div className="h-[20px] w-[20px] relative">
                <Image
                  src={"/images/instaLogo.svg"}
                  alt=""
                  className=""
                  fill
                />
              </div>
            </div>
          </Link>
          <Link href={""}>
            <div className="rounded-[50%] p-[10px] bg-[#6CE9BC1a]">
              <div className="h-[20px] w-[20px] relative">
                <Image
                  src={"/images/youtubeLogo.svg"}
                  alt=""
                  className=""
                  fill
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
