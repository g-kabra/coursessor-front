import Card from "../atoms/Card";
import Arrow from "../atoms/ArrowLink";
import React from "react";

function FeatureCard() {
  return (
    <Card>
      <div className="rounded-[50%] overflow-hidden w-[20%] sm:w-[10%] lg:w-[20%] bg-[#6CE9BC1a] flex items-center justify-center aspect-square">
        <img src="/images/checkmark.svg" alt="" className="h-[50%] w-[50%]"/>
      </div>
      <h1 className="text-4xl mt-8 font-satoshi">Subheading</h1>
      <p className="font-light mt-8 leading-loose text-sm">
        Coursessor is an ed-tech company that connects teachers and learners and
        offers the latest AI tech applied in education.
      </p>
      <Arrow arrowColor={"#6CE9BC"} className="text-[#6CE9BC] mt-8 " link="#">
        Citeste mai mult
      </Arrow>
    </Card>
  );
}

export default FeatureCard;
