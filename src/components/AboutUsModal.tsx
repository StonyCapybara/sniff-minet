"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Modal({ isOpen, onClose }: { isOpen: string, onClose: () => void }) {
  const [showModal, setShowModal] = useState(isOpen == "" ? false : true);
  const [currentName, setCurrentName] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setCurrentName(isOpen);
    } else {
      const timer = setTimeout(() => { setShowModal(false); setCurrentName(""); }, 300); // Match fade-out duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    showModal && (
      <div
        id="modal"
        className={isOpen ? "fade-in" : "fade-out"}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(4px)"
        }}
      >
        <div className="bg-lyellow rounded-lg border-2 border-dblue min-w-[500px]" onClick={(e) => e.stopPropagation()}>
          <div className="bg-pink w-full flex justify-between px-4 py-1 rounded-t-lg border-b-2 border-dblue">
            <div className="text-white text-3xl font-barlow">Member Information</div>
            <div className="bg-cyellow border-2 border-dblue flex justify-center items-center px-2 rounded-md cursor-pointer" onClick={onClose}>
              <Image src={"/closebtnreal.svg"} alt="close" height={12} width={12} />
            </div>
          </div>
          <div className="flex py-4 px-6 gap-8 max-w-lg">
            <div>
              <Image src={`/${currentName}.png`} height={128} width={128} alt="" />
              <div className="font-blatant text-dblue text-3xl text-center">
                {(() => {
                  switch (currentName) {
                    case "fred":
                      return "Divjot"
                    case "shaggy":
                      return "Amaira"
                    case "velma":
                      return "Sunetra"
                    case "daphne":
                      return "Shweta"
                    case "scooby":
                      return "Pushan"
                  }
                })()}
              </div>
            </div>
            <div>
              <div className="font-blatant font-bold text-pink text-6xl">{currentName[0]?.toUpperCase() + currentName?.slice(1)}</div>
              <div className="font-blatant text-dblue text-2xl leading-none">
                {(() => {
                  switch (currentName) {
                    case "fred":
                      return <div>Web dev <br />Pro trapper<br />White guy<br />Did we mention web dev?</div>
                    case "shaggy":
                      return <div>Design<br />Definitely a hippie<br />Foodie<br />Henry Cavill</div>
                    case "velma":
                      return <div>Design<br />Local smarty<br />Still can&apos;t find her glasses<br />Brainrot 100</div>
                    case "daphne":
                      return <div>Design/AV<br />Fashion icon<br />&quot;I&apos;m not in danger, I am the danger.&quot;<br />Eye colour shapeshifter</div>
                    case "scooby":
                      return <div>Best prez<br />Bengali<br />Please let us out of your basement<br />Skibidi</div>
                  }
                })()}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    )
  );
}