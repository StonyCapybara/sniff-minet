"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "./AboutUsModal";

export default function AboutUs() {
  const [openCharacter, setOpenCharacter] = useState("");
  useEffect(() => {
    console.log(openCharacter);
  }, [openCharacter])
  return <div>
    <div className="font-retro text-pink text-8xl text-center mt-24 abtus">About Us</div>
    <div className="h-fit w-fit m-auto">
      <Image src={"/aboutus.gif"} alt="" width={1000} height={1000} className="m-auto mt-12" />
      <div className="w-0 h-0"><button onClick={() => { setOpenCharacter("fred") }} className="w-24 h-24 relative left-[430px] bottom-[570px]"></button></div>
      <div className="w-0 h-0"><button onClick={() => { setOpenCharacter("velma") }} className="w-32 h-24 relative left-[100px] bottom-[500px]"></button></div>
      <div className="w-0 h-0"><button onClick={() => { setOpenCharacter("shaggy") }} className="w-32 h-24 relative left-[430px] bottom-[450px]"></button></div>
      <div className="w-0 h-0"><button onClick={() => { setOpenCharacter("scooby") }} className="w-44 h-24 relative left-[150px] bottom-[300px]"></button></div>
      <div className="w-0 h-0"><button onClick={() => { setOpenCharacter("daphne") }} className="w-32 h-24 relative left-[800px] bottom-[510px]"></button></div>
    </div>
    <Modal isOpen={openCharacter} onClose={() => { setOpenCharacter("") }} />
  </div>
}