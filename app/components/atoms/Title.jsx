import React from "react";

function Title(props) {
  return (
    <>
      <h1 className={`text-2xl md:text-4xl ${props.titleClass}`}>{props.children}</h1>
      <hr className="max-md:hidden border-[#2F2F2F] mt-8"/>
    </>
  );
}

export default Title;
