import React from "react";

function FloatingInput(props) {
  return (
    <div className={`flex flex-col ` + props.outerClasses}>
      <p className="text-sm text-[#C1C1C1] ">{props.label}</p>
      <input
        type="text"
        className="w-[full] bg-transparent appearance-none border-0 border-b-2 focus:outline-none border-[#585858] focus:ring-0 focus:border-[#6CE9BC]"
      />
    </div>
  );
}

export default FloatingInput;
