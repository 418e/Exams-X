"use client";
import { useState } from "react";
import { calculate } from "@/data/DMA";
import Test from "@/components/Start/Test";
import BoardF from "@/components/Start/Board";
import PointsBoard from "@/components/Start/Points";
import Final from "@/components/Start/Final";
import { Btn, Select } from "@/components/UI";

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
  const [userPoints, setUserPoints] = useState(0);
  const [userLostPoints, setUserLostPoints] = useState(0);
  return (
    <>
      <form
        className="pt-8 px-4 pb-24"
        onSubmit={(e) => {
          e.preventDefault();
          setData(calculate(Year, Version, Points, Quantity, Random));
          setTestNumber(0);
          setStarter(true);
          setUserPoints(0);
          setUserLostPoints(0);
        }}
      >
        <div className="flex flex-wrap gap-2 justify-start items-center">
          <Select
            onChange={(e: any) => {
              setYear(e.target.value);
            }}
            options={[
              {
                value: 2023,
                text: "წელი: 2023",
              },
              {
                value: 2022,
                text: "წელი: 2022",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setVersion(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "ვარიანტი: ყველა",
              },
              {
                value: 1,
                text: "ვარიანტი: 1",
              },
              {
                value: 2,
                text: "ვარიანტი: 2",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setPoints(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "ქულები: ყველა",
              },
              {
                value: 1,
                text: "ქულები: 1",
              },
              {
                value: 2,
                text: "ქულები: 2",
              },
              {
                value: 3,
                text: "ქულები: 3",
              },
              {
                value: 4,
                text: "ქულები: 4  ",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setQuantity(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "რაოდენობა: ყველა",
              },
              {
                value: 1,
                text: "რაოდენობა: 1",
              },
              {
                value: 5,
                text: "რაოდენობა: 5",
              },
              {
                value: 10,
                text: "რაოდენობა: 10",
              },
              {
                value: 30,
                text: "ქულრაოდენობაები: 30  ",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setTimer(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "ტაიმერი: კი",
              },
              {
                value: 1,
                text: "ტაიმერი: არა",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setBoard(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "დაფა: კი",
              },
              {
                value: 1,
                text: "დაფა: არა",
              },
            ]}
          />
          <Select
            onChange={(e: any) => {
              setRandom(e.target.value);
            }}
            options={[
              {
                value: 0,
                text: "რანდომი: კი",
              },
              {
                value: 1,
                text: "რანდომი: არა",
              },
            ]}
          />
        </div>
        <Btn types="submit">დაწყება</Btn>
      </form>
      {Data.length - 1 >= TestNumber
        ? Started && (
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
              {Board == 0 && <BoardF />}
            </>
          )
        : Started && (
            <Final
              Points={userPoints}
              LostPoints={userLostPoints}
              TotalProblems={Data.length}
            />
          )}
    </>
  );
}
