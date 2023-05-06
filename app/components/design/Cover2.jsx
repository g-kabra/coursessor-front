import React from "react";
import Image from "next/image";

function Cover(props) {
  return (
    <div className={`relative ${props.className}`}>
      <Image
        src={"/images/Group 1000007479.svg"}
        width={80}
        height={80}
        className="absolute top-[-50px] left-[-200px] opacity-[100%] max-lg:hidden"
        onClick={() => {
          props.signout();
        }}
      />
      <Image 
        src={"/images/GreyRectangle.svg"}
        width={53.69}
        height={53.69}
        className="absolute right-[-150px] bottom-[-20%] max-lg:hidden"
      />
      <Image 
        src={"/images/GreyRectangle.svg"}
        width={31.75}
        height={31.75}
        className="absolute right-[-250px] top-[20%] max-lg:hidden"
      />
      {props.children}
    </div>
  );
}

export default Cover;
