import React from "react";
import Image from "next/image";

function Cover(props) {
  return (
    <div className={`relative ${props.className}`}>
      <Image
        src={"/images/Group 1000007479.svg"}
        width={100}
        height={100}
        className="absolute top-[-100px] left-[-100px] max-lg:hidden"
        onClick={() => {
          props.signout();
        }}
      />
      <Image 
        src={"/images/GreyRectangle.svg"}
        width={53.69}
        height={53.69}
        className="absolute right-[5%] bottom-[20%] max-lg:hidden"
      />
      <Image 
        src={"/images/GreyRectangle.svg"}
        width={31.75}
        height={31.75}
        className="absolute right-[-100px] top-[20%] max-lg:hidden"
      />
      {props.children}
    </div>
  );
}

export default Cover;
