import React from "react";

const Card = (props) => {
  return <div className={"bg-[#FFFFFF0A] p-8 flex flex-col text-left " + props.className}>{props.children}</div>;
};

export default Card;
