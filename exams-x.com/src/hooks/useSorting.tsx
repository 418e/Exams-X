"use client";
import { calculate } from "@/data";
import { useMemo, useState } from "react";
import { Btn, Select, PointsBoard, Test, Final, BoardF } from "@/components";

export default function useSorting() {
  const [States, setStates] = useState({
    year: 2023,
    version: 1,
    points: 0,
    quantity: 0,
    random: 0,
    started: false,
    board: 0,
    timer: 0,
    test_number: 1,
    user_points: 0,
    lost_points: 0,
    strong_tags: [0],
    weak_tags: [0],
  });

  const Data: Calculation[] = useMemo(() => {
    return calculate(
      States.year,
      States.version,
      States.points,
      States.quantity,
      States.random
    );
  }, [
    States.year,
    States.version,
    States.points,
    States.quantity,
    States.random,
  ]);

  const ChangeState = ({
    year,
    version,
    points,
    quantity,
    random,
    started,
    board,
    timer,
    test_number,
    user_points,
    lost_points,
    strong_tags,
    weak_tags,
  }: {
    year?: number;
    version?: number;
    points?: number;
    quantity?: number;
    random?: number;
    started?: boolean;
    board?: number;
    timer?: number;
    test_number?: number;
    user_points?: number;
    lost_points?: number;
    strong_tags?: number[];
    weak_tags?: number[];
  }) => {
    setStates({
      year: year || States.year,
      version: version || States.version,
      points: points || States.points,
      quantity: quantity || States.quantity,
      random: random || States.random,
      started: started || States.started,
      board: board || States.board,
      timer: timer || States.timer,
      test_number: test_number || States.test_number,
      user_points: user_points || States.user_points,
      lost_points: lost_points || States.lost_points,
      strong_tags: strong_tags || States.strong_tags,
      weak_tags: weak_tags || States.weak_tags,
    });
  };

  const Form = () => {
    return (
      <form
        className="pt-8 px-4 pb-24"
        onSubmit={(e) => {
          e.preventDefault();
          ChangeState({
            started: true,
            test_number: 0,
            user_points: 0,
            lost_points: 0,
          });
        }}
      >
        <div className="flex flex-wrap gap-2 justify-start items-center">
          <Select
            onChange={(e: any) => {
              ChangeState({
                year: e.target.value,
              });
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
              ChangeState({
                version: e.target.value,
              });
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
              ChangeState({
                points: e.target.value,
              });
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
              ChangeState({
                quantity: e.target.value,
              });
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
              ChangeState({
                timer: e.target.value,
              });
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
              ChangeState({
                board: e.target.value,
              });
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
              ChangeState({
                random: e.target.value,
              });
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
    );
  };

  const Play = () => {
    return (
      <>
        {Data.length - 1 >= States.test_number
          ? States.started && (
              <>
                <PointsBoard
                  points={States.user_points}
                  lost_points={States.lost_points}
                  total_points={0}
                  problem={States.test_number}
                  total_problems={Data.length}
                  timer={States.timer == 1}
                />
                <Test
                  year={Data[States.test_number]?.year}
                  version={Data[States.test_number]?.version}
                  type={Data[States.test_number]?.type}
                  image={Data[States.test_number]?.image}
                  points={Data[States.test_number]?.points}
                  answer={Data[States.test_number]?.answer}
                  number={Data[States.test_number]?.number}
                  tags={Data[States.test_number]?.tags}
                  answerIsImage={Data[States.test_number]?.answerIsImage}
                  addPage={() => {
                    ChangeState({
                      test_number: States.test_number + 1,
                    });
                  }}
                  removePage={() => {
                    ChangeState({
                      test_number: States.test_number - 1,
                    });
                  }}
                  addPoints={() => {
                    ChangeState({
                      user_points:
                        States.user_points + Data[States.test_number]?.points,
                    });
                  }}
                  addLostPoints={() => {
                    ChangeState({
                      lost_points:
                        States.lost_points + Data[States.test_number]?.points,
                    });
                  }}
                  addStrongtags={(e) => {
                    ChangeState({
                      strong_tags: [...States.strong_tags, ...e],
                    });
                  }}
                  addWeaktags={(e) => {
                    ChangeState({
                      weak_tags: [...States.weak_tags, ...e],
                    });
                  }}
                />
                {States.board == 0 && <BoardF />}
              </>
            )
          : States.started && (
              <Final
                Points={States.user_points}
                LostPoints={States.lost_points}
                TotalProblems={Data.length}
                StrongTags={States.strong_tags}
                WeakTags={States.weak_tags}
              />
            )}
      </>
    );
  };

  return {
    Form: <Form />,
    Play: <Play />,
  };
}
