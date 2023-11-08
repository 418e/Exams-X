"use client";
import { CgDarkMode, CgMenu } from "react-icons/cg";
import { MdNewspaper } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import News from "./Modal";

export default function Nav({ toggle }: { toggle: any }) {
  const [Mobile, setMobile] = useState(false);
  const [Dark, setDark] = useState(false);
  const [Modal, setModal] = useState(false);

  return (
    <nav className="h-16 w-full flex justify-between items-center border-b-4 border-black dark:border-white dark:bg-black dark:text-white">
      <div className="flex items-center">
        <Link href="/">
          <img
            src={`${Dark ? "/ex-x-2.png" : "/ex-x.png"}`}
            className="h-16 cursor-pointer"
            alt="Exams-X"
          />
          <span className="absolute top-8 left-0 ml-28 bg-black text-white p-1 rounded-3xl text-xs dark:bg-white dark:text-black">
            Beta
          </span>
        </Link>
        <ul
          className={`md:flex font-bold space-x-0 md:space-x-8 md:ml-8 ${
            Mobile
              ? "flex absolute w-full mt-32 flex-col justify-center items-center space-y-8 border-b-4 border-black pb-4 bg-white dark:bg-black dark:border-white"
              : "hidden"
          }`}
        >
          <li className={`hover:underline`}>
            <Link href="/start">ტესტები</Link>
          </li>
          {/* <li className={`hover:underline`}>
            <Link href="/">რესურსები</Link>
          </li> */}
        </ul>
      </div>
      <div className="flex mr-8 space-x-2 md:space-x-8">
        {Modal && <News />}
        <div className="cursor-pointer" onClick={() => setModal(!Modal)}>
          <MdNewspaper size={32} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            if (localStorage.theme == "dark") {
              localStorage.theme = "light";
              document.documentElement.classList.remove("dark");
              setDark(false);
              toggle("light");
            } else if (localStorage.getItem("theme") == "light") {
              localStorage.theme = "dark";
              document.documentElement.classList.add("dark");
              setDark(true);
              toggle("dark");
            } else {
              localStorage.removeItem("theme");
            }
          }}
        >
          <CgDarkMode size={32} />
        </div>
        <div
          className="block cursor-pointer md:hidden"
          onClick={() => {
            setMobile(!Mobile);
          }}
        >
          <CgMenu size={32} />
        </div>
      </div>
    </nav>
  );
}
