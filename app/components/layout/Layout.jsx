import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="bg-[#121519] text-white h-screen overflow-x-hidden bg-[url('/images/background.png')] bg-cover">
      <Navbar />
      <div className="h-[10%]" />
        {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
