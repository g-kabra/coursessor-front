import Image from "next/image";
import React from "react";

const ChatBox = (props) => {
  return (
    <div className="bg-[#FFFFFF0D] w-full p-10 fixed bottom-0 flex items-center justify-center text-white">
      <div className="bg-[#121418] rounded-xl md:w-[90%] w-[100%] flex gap-2 md:gap-5 px-5 py-2 font-light">
        <input
          type="text"
          placeholder="Type Message"
          className="grow max-sm:max-w-[80%] bg-transparent appearance-none border-0 text-sm"
        />
        <button className="h-[20px] min-w-[20px] relative">
          <Image src="/images/uploadPicture.svg" alt="" fill />
        </button>
        <button className="h-[20px] min-w-[20px] relative">
          <Image src="/images/uploadPicture.svg" alt="" fill />
        </button>
      </div>
      {props.action && (
        <button className="text-[#6CE9BC] underline mx-3">
          {props.action}
        </button>
      )}
    </div>
  );
};

export default ChatBox;
