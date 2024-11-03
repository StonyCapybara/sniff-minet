"use client";

import { useState } from "react";
import Modal from "./ModalButton";

export default function GetStartedButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
    <Modal isOpen={modalOpen} onClose={(() => { setModalOpen(false) })} />
    <button onClick={(() => { setModalOpen(true); })} className="navbtn transition-all bg-highlight font-blatant text-4xl w-fit px-20 py-3 text-cyellow rounded-md border-dblue border-2">GET STARTED</button>
  </>
}