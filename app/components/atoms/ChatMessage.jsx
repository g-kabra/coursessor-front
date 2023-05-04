import Image from "next/image";
import React from "react";

const ChatMessage = (props) => {
  return (
    <div
      className={`${
        props.send ? "flex-row-reverse ml-auto" : "mr-auto "
      } flex md:w-[40%] w-[70%] gap-3 self-start`}
    >
      <div className="relative">
        <Image
          src={`${
            props.send ? "/images/senderProfile.svg" : "/images/botProfile.svg"
          }`}
          alt=""
          fill
        />
      </div>
      <p
        className={`${
          props.send ? "bg-[#121418]" : "bg-[#6CE9BC1F]"
        } p-4 grow text-sm backdrop-blur rounded-xl`}
      >
        {props.children}
      </p>
    </div>
  );
};

export default ChatMessage;
