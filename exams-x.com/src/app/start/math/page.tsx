"use client";
import { useState, useMemo } from "react";
import { calculate } from "@/data";
import Test from "@/components/Start/Test";
import BoardF from "@/components/Start/Board";
import PointsBoard from "@/components/Start/Points";
import Final from "@/components/Start/Final";
import { Btn, Select } from "@/components/UI";

export default function Start() {
  // Year of the test
  const [Year, setYear] = useState(2023);

  // Version of the test
  const [Version, setVersion] = useState(1);

  // Points of the problem
  const [Points, setPoints] = useState(0);

  // Quantity of problems
  const [Quantity, setQuantity] = useState(0);

  // Order of the test
  const [Random, setRandom] = useState(0);

  // Is test started?
  const [Started, setStarter] = useState(false);

  // Whiteboard
  const [Board, setBoard] = useState(0);

  // Timer
  const [Timer, setTimer] = useState(0);

  // Number of the current problem
  const [TestNumber, setTestNumber] = useState(1);

  // Points achieved by answering correctly
  const [userPoints, setUserPoints] = useState(0);

  // Points lost by answering incorreclty
  const [userLostPoints, setUserLostPoints] = useState(0);

  // Tags
  const [StrongTags, setStrongTags]: [number[], any] = useState([]);
  const [WeakTags, setWeakTags]: [number[], any] = useState([]);

  // DMA calculated data
  const Data: Calculation[] = useMemo(() => {
    return calculate(Year, Version, Points, Quantity, Random);
  }, [Year, Version, Points, Quantity, Random]);
  return (
    <>
      <form
        className="pt-8 px-4 pb-24"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem(
            "math",
            "{ strong: [0], weak: [0], points: [{ tag: 0, points: 0 }] }"
          );
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
              {
                value: 2021,
                text: "წელი: 2021",
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
              {
                value: 3,
                text: "ვარიანტი: 3",
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
                tags={Data[TestNumber]?.tags}
                answerIsImage={Data[TestNumber]?.answerIsImage}
                addPage={() => setTestNumber(TestNumber + 1)}
                removePage={() => setTestNumber(TestNumber - 1)}
                addPoints={() =>
                  setUserPoints(userPoints + Data[TestNumber]?.points)
                }
                addLostPoints={() =>
                  setUserLostPoints(userLostPoints + Data[TestNumber]?.points)
                }
                addStrongtags={(e) => {
                  setStrongTags([...StrongTags, ...e]);
                }}
                addWeaktags={(e) => {
                  setWeakTags([...WeakTags, ...e]);
                }}
              />
              {Board == 0 && <BoardF />}
            </>
          )
        : Started && (
            <Final
              Points={userPoints}
              LostPoints={userLostPoints}
              TotalProblems={Data.length}
              StrongTags={StrongTags}
              WeakTags={WeakTags}
            />
          )}
    </>
  );
}
