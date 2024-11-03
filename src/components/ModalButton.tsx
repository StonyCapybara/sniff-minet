"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocalStorageSetItem } from "./useLocalStorage";

export default function Modal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [showModal, setShowModal] = useState(isOpen);
  const router = useRouter();
  const setItem = useLocalStorageSetItem();

  function next() {
    document.getElementById("email")?.setAttribute("value", "ishitaiscute@gmail.com");
    document.getElementById("password")?.setAttribute("value", "dfksfhjskjerh8isudfhsdif");
    setTimeout(() => {
      onClose();
      setItem("logged", "true");
      router.push("/home");
    }, 1000);
  }

  useEffect(() => {
    if (isOpen) {
      setShowModal(true); // Show modal immediately when opening
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); // Match fade-out duration
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
        <div id="modalDabba" className="bg-dblue rounded shadow-lg p-1" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center">
            <div className="w-full bg-dblue text-cyellow font-blatant px-8 text-5xl">
              SIGN IN
            </div>
            <Image src={"/closebtn.svg"} width={32} height={32} alt="Close" onClick={onClose} className="h-full hover:cursor-pointer mx-2 my-2" />
          </div>
          <div className="bg-cyellow flex flex-col gap-3 px-12 py-6">
            <input type="text" id="email" className="text-4xl px-3 w-96 py-2 bg-dblue text-cyellow font-barlow rounded-md" placeholder="EMAIL ID" />
            <input type="password" id="password" className="text-4xl w-96 px-3 py-2 bg-dblue text-cyellow font-barlow rounded-md" placeholder="PASSWORD" />
            <div className="text-dblue font-blatant text-2xl text-center">Don&apos;t have an account? <button onClick={next} className="inline text-pink font-barlow underline">Sign up.</button></div>
            <button onClick={next} className="text-3xl bg-dblue font-barlow font-semibold text-cyellow w-fit m-auto px-4 rounded-md">SIGN IN</button>
          </div>
        </div>
      </div>
    )
  );
}