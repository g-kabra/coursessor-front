import React from "react";
import Layout from "../../../../components/layout/Layout";
import Title from "../../../../components/atoms/Title";
import BlogList from "../../../../components/organisms/BlogList";

function Blogs() {
  const data = [
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
  ];
  return (
    <Layout>
      <div className="w-[90%] mx-auto mt-10">
        <Title>Blog</Title>
        <BlogList className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4" data={data}/>
      </div>
    </Layout>
  );
}

export default Blogs;
