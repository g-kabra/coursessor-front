import React from "react";
import ChatMessage from "../atoms/ChatMessage";

const Chat = (props) => {
  const data = [];
  return (
    <div className="h-full w-full bg-[#FFFFFF0D] flex flex-col items-center font-light text-sm">
        <h1 className="my-10">Saturday, March 31, 2022</h1>
      <div className="flex flex-col gap-10 w-[90%] mx-auto">
        <ChatMessage send={true}>Hello World</ChatMessage>
        <ChatMessage>Hello World</ChatMessage>
        <ChatMessage send={true}>Hello World</ChatMessage>
      </div>
    </div>
  );
};

export default Chat;
