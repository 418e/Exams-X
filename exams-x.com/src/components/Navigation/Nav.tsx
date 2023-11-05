"use client";
import { CgDarkMode, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [Mobile, setMobile] = useState(false);
  const [Dark, setDark] = useState(false);

  return (
    <nav className="h-16 w-full flex justify-between items-center border-b-4 border-black dark:border-white dark:bg-black dark:text-white">
      <div className="flex items-center">
        <Link href="/">
          <img
            src={`${Dark ? "/ex-x-2.png" : "/ex-x.png"}`}
            className="h-16 cursor-pointer"
          />
          <span className="absolute top-8 left-0 ml-28 bg-black text-white p-1 rounded-3xl text-xs dark:bg-white dark:text-black">
            Beta
          </span>
        </Link>
        <ul
          className={`md:flex font-bold space-x-0 md:space-x-8 md:ml-8 ${
            Mobile
              ? "flex absolute w-full mt-64 flex-col justify-center items-center space-y-8 border-b-4 border-black pb-4 bg-white dark:bg-black"
              : "hidden"
          }`}
        >
          <li className={`hover:underline`}>
            <Link href="/choose">ტესტები</Link>
          </li>
          <li className={`hover:underline`}>
            <Link href="/">რესურსები</Link>
          </li>
        </ul>
      </div>
      <div className="flex mr-8 space-x-8">
        <div
          className="cursor-pointer"
          onClick={() => {
            if (localStorage.theme == "dark") {
              localStorage.theme = "light";
              document.documentElement.classList.remove("dark");
              setDark(false);
            } else if (localStorage.getItem("theme") == "light") {
              localStorage.theme = "dark";
              document.documentElement.classList.add("dark");
              setDark(true);
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
