import React from "react";
import Image from "next/image";

function SingleRow(props) {
  const side = ((Math.random()%0.75) + 0.75) * 600;
  const diff = ((Math.random()*2) - 1) * 100;
  return (
    <>
      <div className="col-span-1 relative opacity-[50%] relative">
        {props.type && (
          <Image
            src={"/images/BgCircle.svg"}
            width={side}
            height={side}
            className={`absolute left-[${diff}%] `}
          />
        )}
      </div>
      <div className="col-span-1 relative opacity-[50%] relative">
        {!props.type && (
          <Image
            src={"/images/BgCircle.svg"}
            width={side}
            height={side}
            className={`absolute right-[${diff}%]`}
          />
        )}
      </div>
    </>
  );
}

export default SingleRow;
