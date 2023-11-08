"use client";
import { useState } from "react";

export default function BoardF() {
  const [Board, setBoard] = useState(false);
  return (
    <>
      <div className="inline-flex items-center m-4 justify-center w-full">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            id="auto-update"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-black peer-checked:border-black peer-checked:before:bg-black border border-black dark:checked:bg-white dark:peer-checked:border-white dark:peer-checked:before:bg-white dark:border-white"
            onChange={(e) => setBoard(!Board)}
          />
          <label
            htmlFor="auto-update"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white dark:bg-black shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-black dark:peer-checked:border-white peer-checked:before:bg-black dark:peer-checked:before:bg-white border-black dark:border-white"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5 "
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
        <label
          htmlFor="auto-update"
          className="mt-px ml-3 mb-0 cursor-pointer select-none font-light "
        >
          დაფა
        </label>
      </div>
      <div className="w-full h-[70vh] bg-green-900">
        {Board && (
          <iframe
            src="https://www.tldraw.com/"
            className="h-full w-full"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </>
  );
}
