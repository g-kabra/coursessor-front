import React from "react";
import Carousel from "../layout/Carousel";
import Arrow from "../atoms/ArrowLink";

const CarouselText = () => {
  return (
    <div className="m-10 grid md:grid-cols-2 grid-cols-1 gap-20 min-h-min">
      <Carousel />
      <div className="xl:max-w-[60%] max-w-[90%] my-auto">
        <h1 className="text-4xl leading-normal relative">
          De la învățat mecanic la gândire critică
        </h1>
        <p className="mt-10 font-light w-[90%] leading-relaxed text-sm">
          Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat
          în zilele noastre, de la o activitate menită să restrângă gândirea
          critică și imaginația elevilor, la activitatea complexă din zilele
          noastre.
        </p>
        <div className="flex">
          <Arrow
            link={""}
            arrowColor="#6CE9BC"
            arrowClasses=""
            className="text-[#6CE9BC] text-sm mt-10 font-light">
            Citeste mai mult
          </Arrow>
        </div>
      </div>
    </div>
  );
};

export default CarouselText;
