import React from "react";

function Endorsements() {
  return (
    <div className="flex flex-col text-left w-[90%] mt-40 mx-auto overflow-x-hidden">
      <h1 className="text-5xl leading-normal relative lg:text-center">
        This is some heading
      </h1>
      <p className="mt-10 font-light w-[90%] lg:w-[50%] xl:w-[40%] lg:mx-auto lg:text-center leading-relaxed text-sm">
        Coursessor is an ed-tech company that connects teachers and learners and
        offers the latest AI tech applied in education, using the power of
        Generative models and custom deep learning models to help students
        achieve their goals.
      </p>
      <div className="min-w-screen flex gap-20 mx-auto mt-10 justify-center">
        <img src="/images/endorsement.png" alt="" />
        <img src="/images/endorsement.png" alt="" />
        <img src="/images/endorsement.png" alt="" />
        <img src="/images/endorsement.png" alt="" />
        <img src="/images/endorsement.png" alt="" />
      </div>
      <video src="/videos/BB_c8ce2924-399f-4115-b240-70a78d6c4932.mp4" autoPlay={true} loop={true} muted className="w-[80%] overflow-hidden mx-auto my-10 cover outline outline-[#6CE9BC]" />
    </div>
  );
}

export default Endorsements;
