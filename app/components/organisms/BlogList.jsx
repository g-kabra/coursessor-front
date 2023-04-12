import React from "react";
import BlogDisplay from "../atoms/BlogDisplay";

const BlogList = () => {
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
  ];
  return (
    <div className="flex flex-col lg:text-center w-[90%] items-center justify-center mt-40 mx-auto">
      <h1 className="text-4xl leading-normal">This is some heading</h1>
      <p className="text-md font-light xl:w-[30%] lg:w-[50%] w-[90%] mt-10">
        Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat
        în zilele noastre, de la o activitate menită să restrângă gândirea
        critică și imaginația elevilor, la activitatea complexă din zilele
        noastre.
      </p>
      <div className="flex flex-wrap justify-evenly mt-20">
        {data.map((e, ind) => {
          return <BlogDisplay
            imageLink={e.imageLink}
            heading={e.heading}
            content={e.content}
            linkText={e.linkText}
            className="md:max-w-[20%] w-[90%]"
            key={ind}
          />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
