"use client";
import { useState } from "react";
import { calculate } from "@/data";
import Test from "@/components/Test";
import BoardF from "@/components/Board";
import PointsBoard from "@/components/Points";

export default function Start() {
  const [Year, setYear] = useState(2023);
  const [Version, setVersion] = useState(1);
  const [Points, setPoints] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [Random, setRandom] = useState(0);
  const [Started, setStarter] = useState(false);
  const [Board, setBoard] = useState(0);
  const [Timer, setTimer] = useState(0);
  const [TestNumber, setTestNumber] = useState(1);
  const [Data, setData]: [Calculation[], any] = useState([]);
  //
  const [userPoints, setUserPoints] = useState(0);
  const [userLostPoints, setUserLostPoints] = useState(0);

  const selectClassName =
    "text-lg w-full md:w-96 h-24 px-6 focus:outline-none border-2 border-black bg-white cursor-pointer dark:border-white dark:bg-black";
  return (
    <>
      <form
        className=" pt-8  px-4 pb-24"
        onSubmit={(e) => {
          e.preventDefault();
          setData(calculate(Year, Version, Points, Quantity, Random));
          setTestNumber(0);
          setStarter(true);
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4"
        >
          <select
            onChange={(e: any) => {
              setYear(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={2023}>წელი: 2023</option>
            <option value={2022}>წელი: 2022</option>
          </select>
          <select
            onChange={(e: any) => {
              setVersion(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={0}>ვარიანტი: ყველა</option>
            <option value={1}>ვარიანტი: 1</option>
            <option value={2}>ვარიანტი: 2</option>
          </select>
          <select
            onChange={(e: any) => {
              setPoints(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={0}>ქულები: ყველა</option>
            <option value={1}>ქულები: 1</option>
            {Year == 2022 && <option value={2}>ქულები: 2</option>}
            <option value={3}>ქულები: 3</option>
            <option value={4}>ქულები: 4</option>
          </select>
          <select
            onChange={(e: any) => {
              setQuantity(e.target.value);
            }}
            className={selectClassName}
            disabled
          >
            <option value={0}>რაოდენობა: ყველა</option>
            <option value={1}>რაოდენობა: 1</option>
            <option value={5}>რაოდენობა: 5</option>
            <option value={10}>რაოდენობა: 10</option>
            <option value={30}>რაოდენობა: 30</option>
          </select>
          <select
            onChange={(e: any) => {
              setTimer(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={0}>ტაიმერი: კი</option>
            <option value={1}>ტაიმერი: არა</option>
          </select>
          <select
            onChange={(e: any) => {
              setBoard(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={0}>დაფა: კი</option>
            <option value={1}>დაფა: არა</option>
          </select>
          <select
            onChange={(e: any) => {
              setRandom(e.target.value);
            }}
            className={selectClassName}
          >
            <option value={0}>რანდომი: კი</option>
            <option value={1}>რანდომი: არა</option>
          </select>
        </div>
        <button
          type="submit"
          className="border-2 border-black rounded-3xl font-bold text-xl transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black p-4 my-8"
        >
          დაწყება
        </button>
      </form>
      {Started && (
        <>
          <PointsBoard
            points={userPoints}
            lost_points={userLostPoints}
            total_points={0}
            problem={TestNumber}
            total_problems={Data.length}
            timer={Timer == 1}
          />
          <Test
            year={Data[TestNumber]?.year}
            version={Data[TestNumber]?.version}
            type={Data[TestNumber]?.type}
            image={Data[TestNumber]?.image}
            points={Data[TestNumber]?.points}
            answer={Data[TestNumber]?.answer}
            number={Data[TestNumber]?.number}
            answerIsImage={Data[TestNumber]?.answerIsImage}
            addPage={() => setTestNumber(TestNumber + 1)}
            removePage={() => setTestNumber(TestNumber - 1)}
            addPoints={() =>
              setUserPoints(userPoints + Data[TestNumber]?.points)
            }
            addLostPoints={() =>
              setUserLostPoints(userLostPoints + Data[TestNumber]?.points)
            }
          />
        </>
      )}
      {Board == 0 && <BoardF />}
    </>
  );
}
