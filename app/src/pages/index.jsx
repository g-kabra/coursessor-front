import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/organisms/Hero";
import CarouselText from "../../components/organisms/CarouselText";
import Features from "../../components/organisms/Features";
import Endorsements from "../../components/organisms/Endorsements";
import Contact from "../../components/organisms/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CarouselText />
      <Features />
      <Endorsements />
      <Contact />
    </Layout>
  );
}
