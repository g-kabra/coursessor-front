import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import ChatBox from "../../components/organisms/ChatBox";
import Chat from "../../components/organisms/Chat";
import HeroDynamic from "../../components/organisms/HeroDynamic";

export default function Chatlect() {
  return (
    <div className="bg-[#121519] text-white h-screen w-screen overflow-x-hidden">
      <Navbar />
      {/* <HeroDynamic /> */}
      <div className="h-[10%]"></div>
      <Chat />
      <ChatBox />
    </div>
  );
}
