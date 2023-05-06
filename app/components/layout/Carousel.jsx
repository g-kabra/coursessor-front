import { React, useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "https://coursessor.imgix.net/ai-cloud-concept-with-robot-head.jpg",
    "https://coursessor.imgix.net/creative-cloud-concept-glass-cube-cloudscape-digital-metaverse-infrastructure.jpg",
    "https://coursessor.imgix.net/line-brain-background-is-circuit-board-abstract-dot-point-connect-with-gradient-line-aesthetic-intricate-wave-line-design-aigenerated.jpg",
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
    <div className="flex xl:h-full xl:max-w-[70%] w-full ml-auto my-auto flex-col gap-4 items-center justify-center">
      <div className="relative flex-nowrap flex h-full w-full overflow-hidden ring-2 ring-[#6CE9BC]">
        {images.map((e, index) => {
          return (
            <div
              className="relative w-full h-full aspect-[4/3] grow shrink-0"
              key={index}
            >
              <Image
                src={e}
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                className="transition-all duration-500"
                alt="Carousel Image"
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 mt-4">
        {images.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`${
                currentIndex === index ? "ring-1 ring-[#6CE9BC]" : ""
              } rounded-[50%]`}
            >
              <div
                className={`${
                  currentIndex === index ? "bg-[#6CE9BC]" : "bg-[gray] "
                } h-[5px] w-[5px] rounded-[50%] m-[10px]`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
