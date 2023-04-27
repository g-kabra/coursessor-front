import React from "react";
import Card from "../atoms/Card";
import FloatingInput from "../atoms/FloatingInput";
import Arrow from "../atoms/ArrowLink";

function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[90%] lg:w-[50%] mx-auto mt-20 text-left">
      <div className="w-[100%] my-auto ml-auto py-10">
        <h1 className="text-4xl leading-normal relative">
          This is some heading
        </h1>
        <p className="mt-10 font-light w-[90%] leading-relaxed text-sm">
          Coursessor is an ed-tech company that connects teachers and learners
          and offers the latest AI tech applied in education, using the power of
          Generative models and custom deep learning models to help students
          achieve their goals.
        </p>
      </div>
      <Card className="gap-4">
        <div className="flex max-lg:flex-wrap gap-4">
          <FloatingInput label="First Name" outerClasses="lg:w-[45%] w-[100%]" />
          <FloatingInput label="Last Name" outerClasses="lg:w-[45%] w-[100%]" />
        </div>
        <FloatingInput label="Message" />
        <Arrow link="#" arrowColor="#6CE9BC" className="text-[#6CE9BC]">
          Citeste mai mult
        </Arrow>
      </Card>
    </div>
  );
}

export default Contact;
