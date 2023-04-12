import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../../../components/layout/Navbar";
import Hero from "../../../../components/organisms/Hero";
import CarouselText from "../../../../components/organisms/CarouselText";
import BlogList from "../../../../components/organisms/BlogList";
import Footer from "../../../../components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-[#121519] text-white h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <CarouselText />
      <BlogList />
      <Footer />
    </div>
  );
}
