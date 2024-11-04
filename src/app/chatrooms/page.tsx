"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    displayName: "SRK",
    displayMessage: "hey-hey, that's so crazy!",
    displayTime: "16:14",
  },
  {
    displayName: "Skibidi Detectives",
    displayMessage: "Shrek: Did you find anything?",
    displayTime: "16:13",
  }, {
    displayName: "Olaf",
    displayMessage: "I found a snowflake!!!",
    displayTime: "13:47",
  }, {
    displayName: "Batman",
    displayMessage: "BRO I SAW THE JOKER?!?!?!",
    displayTime: "11:25",
  }, {
    displayName: "Robin",
    displayMessage: "I took in another kid I found :D",
    displayTime: "9:50",
  }, {
    displayName: "Anonymous",
    displayMessage: "I saw a huge footprint near the...",
    displayTime: "Wed",
  }, {
    displayName: "Aztec Case",
    displayMessage: "Spiderman: Loved working with...",
    displayTime: "Thr",
  }, {
    displayName: "Henry Cavill",
    displayMessage: "Wanna go on a date on the next…",
    displayTime: "Fri",
  },
  {
    displayName: "Anonymous",
    displayMessage: "Thank you so much for helping us!",
    displayTime: "Sat",
  },
  {
    displayName: "Pushan",
    displayMessage: "I SWEAR I SAW A BENGALI CHUDAIL",
    displayTime: "Sun",
  }
]

export default function Chatrooms() {
  const [openChat, setOpenChat] = useState("");

  return <div className="p-12">
    <div className="dblue-shadow bg-lblue rounded-lg max-w-7xl m-auto mt-8 border-2 border-dblue min-h-[500px] max-h-[640px]">
      <div className="w-full bg-[#4D6192] text-lblue font-barlow font-semibold text-6xl rounded-t-lg px-6 py-2">CHATROOMS</div>
      <div className="flex w-full justify-stretch items-stretch">
        <div className="">
          <div className="flex w-full items-center justify-between px-2 gap-2 py-4">
            <div className="">
              <div className="flex items-center gap-3 font-barlow font-semibold text-2xl border-2 border-dblue rounded-2xl">
                <Image src={"/renayachat.png"} alt="" width={128} height={128} className="w-14 h-14" />
                <div className="text-3xl text-dblue">Renaya</div>
                <Image src={"/pencil.svg"} alt="" width={128} height={16} className="w-6 h-6 pr-1" />
              </div>
            </div>
            <div className="">
              <Image src={"/shopsearch.png"} alt="" width={512} height={512} className="h-8 w-[80%]" />
            </div>
          </div>
          <div className="flex flex-col gap-3 px-2 pb-2 overflow-y-scroll max-h-[468px]">
            {data.map(messageData => {
              return <div key={messageData.displayMessage}
                className={"flex justify-between border border-dblue rounded-2xl font-barlow font-semibold text-dblue gap-4" + (openChat === messageData.displayName ? " bg-[#B1C3ED]" : "") + (messageData.displayTime === "16:14" || messageData.displayTime === "16:13" || messageData.displayTime === "13:47" ? " cursor-pointer" : "")}
                onClick={() => {
                  if (messageData.displayTime === "16:14" || messageData.displayTime === "16:13" || messageData.displayTime === "13:47") setOpenChat(messageData.displayName);
                }}
              >
                <Image src={`/chat/${messageData.displayName?.toLowerCase()}.png`} alt="" width={512} height={512} className="h-16 w-16" />
                <div className="w-full">
                  <div className="text-3xl">{messageData.displayName}</div>
                  <div className="font-blatant text-dblue font-thin opacity-60 tracking-widest">{messageData.displayMessage}</div>
                </div>
                <div className="text-lg opacity-60 py-1 px-4">
                  {messageData.displayTime}
                </div>
              </div>
            })}
          </div>
        </div>
        <div className="flex-[3] border-l-2 border-dblue">
          {openChat === "Skibidi Detectives" ? <Image src={"/skibidichat.png"} alt="" width={2048} height={2048} className="h-[560px]" priority /> : ""}
          {openChat === "SRK" ? <Image src={"/srkchat.png"} alt="" width={2048} height={2048} className="h-[560px]" priority /> : ""}
          {openChat === "Olaf" ? <Image src={"/olafchat.png"} alt="" width={2048} height={2048} className="h-[560px]" priority /> : ""}
        </div>
        <div></div>
      </div>
    </div>
  </div>
}