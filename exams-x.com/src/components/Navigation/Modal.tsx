"use client";
import { useState } from "react";
export default function Modal() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`fixed rounded-lg flex justify-center items-center w-screen h-screen top-0 left-0 ${
        !open && "hidden -z-10"
      } z-10 bg-[#0000001e]`}
      onClick={() => setOpen(false)}
    >
      <div className="h-96 w-96 p-4 text-center z-20 dark:bg-black dark:border rounded-xl bg-white cursor-pointer">
        <div className="font-bold text-2xl">განახლებები</div>
        <div>0.1.6 (Nov 6)</div>
        {/* <ul className="mt-8 space-y-4 font-bold">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul> */}
      </div>
    </div>
  );
}
