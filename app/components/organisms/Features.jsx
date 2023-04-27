import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="flex flex-col text-left w-[90%] mt-40 mx-auto">
      <h1 className="text-5xl leading-normal relative lg:text-center">This is some heading</h1>
      <p className="mt-10 font-light w-[90%] lg:w-[50%] xl:w-[40%] lg:mx-auto lg:text-center leading-relaxed text-sm">
        Coursessor is an ed-tech company that connects teachers and learners and
        offers the latest AI tech applied in education, using the power of
        Generative models and custom deep learning models to help students
        achieve their goals.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[100%] lg:w-[70%] mt-10 gap-10 mx-auto">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}

export default Features;
