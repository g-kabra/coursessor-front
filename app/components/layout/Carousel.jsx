import { React, useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "/images/sampleImage2.jpg",
    "/images/sampleImage2.jpg",
    "/images/sampleImage2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === images.length - 1) return setCurrentIndex(0);
    return setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    // clean up function
    return () => clearInterval(interval);
  });
  return (
    <div className="xl:h-full xl:max-w-[70%] ml-auto my-auto flex flex-col gap-4 items-center justify-center">
      <div className="h-auto relative flex flex-nowrap overflow-hidden outline outline-2 outline-[#6CE9BC]">
        {images.map((e, index) => {
          return (
            <img
              src={e}
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              className="w-full h-full transition-all duration-500"
              key={index}
              alt="Sample Image"
            />
          );
        })}
      </div>
      <div className="flex gap-8 mt-4">
        {images.map((e, index) => {
          return <div onClick={() => {setCurrentIndex(index)}} className={`${currentIndex === index ? "bg-[#6CE9BC] outline outline outline-[#6CE9BC] outline-offset-[10px] " : "bg-[gray] "} h-[5px] w-[5px] rounded-[50%]`}></div>
        })}
      </div>
    </div>
  );
};

export default Carousel;
