import React from "react";
import Carousel from "../layout/Carousel";
import Arrow from "../atoms/ArrowLink";

const CarouselText = () => {
  return (
    <div className="m-10 grid md:grid-cols-2 grid-cols-1 gap-20 min-h-min">
      <Carousel />
      <div className="xl:max-w-[60%] max-w-[90%] my-auto">
        <h1 className="text-4xl leading-normal relative">
        Coursessor Uses Advanced Language Models to Personalize Learning Experience
        </h1>
        <p className="mt-10 font-light w-[90%] leading-relaxed text-sm">

        Coursessor uses advanced machine learning models called Large Language Models (LLMs) to analyze each student's learning style and progress, and recommend personalized learning materials such as articles, videos, quizzes, and simulations. As students progress, the LLM-based system adapts to their performance, providing real-time feedback and recommendations to help them achieve their learning goals faster and more efficiently.
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
