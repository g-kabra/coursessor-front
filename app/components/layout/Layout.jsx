import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "../design/Background";
import Image from "next/image";

function Layout(props) {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <Background />
      <Navbar />
      <div className="h-[10vh]">
        <Image
          src={"/images/Group 1000007479.svg"}
          width={80}
          height={80}
          className="absolute lg:hidden right-[20px] top-[20px] opacity-[12%] z-[5] scale-x-[-1]"
          onClick={() => {
            props.signout();
          }}
        />
      </div>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
