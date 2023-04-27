import React from "react";
import BlogDisplay from "../atoms/BlogDisplay";

const BlogList = (props) => {
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
    <div className={`grid gap-5 md:mt-20 ${props.className}`}>
      {data.map((e, ind) => {
        return (
          <BlogDisplay
            imageLink={e.imageLink}
            heading={e.heading}
            content={e.content}
            linkText={e.linkText}
            className=""
            k={ind}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
