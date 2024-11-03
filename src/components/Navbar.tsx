"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Modal from "./ModalButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorageGetItem, useLocalStorageClear } from "./useLocalStorage";

export default function Navbar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const getItem = useLocalStorageGetItem();
  const clear = useLocalStorageClear();

  const links = [
    { href: '/home', label: 'HOME' },
    { href: 'spacer1', label: 's' },
    { href: '/leaderboard', label: 'LEADERBOARD' },
    { href: 'spacer2', label: 's' },
    { href: '/forums', label: 'FORUMS' },
    { href: 'spacer3', label: 's' },
    { href: '/shop', label: 'SHOP' },
  ];

  return <nav className=" md:mx-16 md:my-4 md:py-2 border-b-[3px] border-b-accent flex justify-between items-center">
    <Link href={"/"}><Image src={"/logo.svg"} alt="logo" width={256} height={256} className="w-auto h-auto md:w-32" /></Link>
    <div id="links" className="font-barlow flex w-full justify-between mx-28 items-center">
      {links.map((link) => {
        return <Fragment key={link.href}>
          {
            link.label === "s"
              ? <div className="h-10 w-[2px] bg-accent"></div>
              : <Link href={link.href} className={"md:text-4xl " + ((pathname == link.href) || (pathname === "/" && link.label === "HOME") || (pathname === "/map" && link.label === "HOME") || (pathname === "/clueboard" && link.label === "HOME")
                ? "text-highlight"
                : "text-accent")}>
                {link.label}
              </Link>}
        </Fragment>
      })}
    </div>
    <div id="button">
      {getItem("logged") !== "true"
        ? <button onClick={(() => { setModalOpen(true) })} className="navbtn transition-all bg-highlight font-blatant text-xl w-56 py-1 text-cyellow rounded-md border-dblue border-2">Sign In/Sign Up</button>
        : <button onClick={(() => { clear("logged"); router.push("/") })} className="navbtn transition-all bg-highlight font-blatant text-xl w-56 py-1 text-cyellow rounded-md border-dblue border-2">Log out</button>}
    </div>
    <Modal isOpen={modalOpen} onClose={(() => { setModalOpen(false) })} />
  </nav>
}