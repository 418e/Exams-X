"use client";
import { useState } from "react";
import CorrectModal from "./Correct";
import Btn from "../UI/Button";
import Image from "next/image";

export default function Test(props: CalculationWithFn) {
  // Answer set by user (closed question)
  const [Answer, setAnswer] = useState("");

  // Answer set by user (open question)
  const [OpenAnswer, setOpenAnswer] = useState("1");

  // Correctness of user's answers
  const [Correct, setCorrect] = useState(false);
  const [Incorrect, setIncorrect] = useState(false);

  // If process was successfull
  const [Success, setSuccess] = useState(false);
  return (
    <section
      key={props.year + props.version + props.number}
      className="flex flex-col border-y-4 border-black dark:border-white pt-12"
    >
      <div className="w-full min-h-screen flex flex-col">
        {Correct && <CorrectModal correct={true} />}
        {Incorrect && <CorrectModal correct={false} />}
        <div className="m-4 w-full text-center">
          {props.year}, ვარიანტი {props.version} / N{props.number} (
          {props.points} ქულა)
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={props.image}
            className="h-auto w-full lg:w-[50vw] border-b-2 border-black dark:border-white select-none object-contain pb-2"
            height={2048}
            width={2048}
            alt={`${props.number}`}
            loading="lazy"
          />
        </div>
        {props.doanswers && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {props.type == "closed" ? (
              <div className="flex justify-around mt-12">
                <button
                  className={`border-2 border-black text-black h-12 w-12 rounded-full dark:border-white hover:text-white dark:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white transition-all ${
                    Answer == "ა" && "border-green-500"
                  }`}
                  onClick={() => {
                    setAnswer("ა");
                  }}
                >
                  ა
                </button>
                <button
                  className={`border-2 border-black text-black h-12 w-12 rounded-full dark:border-white hover:text-white dark:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white transition-all ${
                    Answer == "ბ" && "border-green-500"
                  }`}
                  onClick={() => {
                    setAnswer("ბ");
                  }}
                >
                  ბ
                </button>
                <button
                  className={`border-2 border-black text-black h-12 w-12 rounded-full dark:border-white hover:text-white dark:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white transition-all ${
                    Answer == "გ" && "border-green-500"
                  }`}
                  onClick={() => {
                    setAnswer("გ");
                  }}
                >
                  გ
                </button>
                <button
                  className={`border-2 border-black text-black h-12 w-12 rounded-full dark:border-white hover:text-white dark:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white transition-all ${
                    Answer == "დ" && "border-green-500"
                  }`}
                  onClick={() => {
                    setAnswer("დ");
                  }}
                >
                  დ
                </button>
              </div>
            ) : (
              <>
                <div className="w-full flex items-center flex-col mt-2">
                  {props.answerIsImage &&
                    Success && // @ts-ignore
                    props.answer.map((e: string) => {
                      return (
                        <Image
                          height={4096}
                          width={4096}
                          alt={`${props.number}`}
                          loading="lazy"
                          key={e}
                          src={e}
                          className={`h-auto w-full lg:w-[50vw] border-b-2 border-black dark:border-white select-none pb-2 object-contain`}
                        />
                      );
                    })}
                </div>
                <div className="w-full flex justify-center my-8">
                  {Success && (
                    <>
                      <input
                        type="number"
                        className="border border-black dark:border-white dark:bg-black focus:outline-none p-1 rounded-md"
                        placeholder="მიღებული ქულები"
                        defaultValue={1}
                        onChange={(e) => {
                          setOpenAnswer(e.target.value);
                        }}
                      />
                    </>
                  )}
                </div>
              </>
            )}
            <div className="w-full flex justify-center my-8">
              <Btn
                onClick={() => {
                  const answ = props.answer[0][props.answer[0].length - 1];
                  setCorrect(false);
                  setIncorrect(false);
                  const storage: {
                    strong: number[];
                    weak: number[];
                    points: { tag: number; points: number }[];
                  } = {
                    strong: [0],
                    weak: [0],
                    points: [{ tag: 0, points: 0 }],
                  };
                  if (props.type == "closed" && answ == Answer) {
                    // correct closed answer
                    setSuccess(true);

                    props.tags.map((tag: number) => {
                      storage.strong.push(tag);
                    });
                    props.tags.map((tag: number) => {
                      storage.points.push({
                        tag: tag,
                        points: props.points,
                      });
                    });
                    props.addStrongtags && props.addStrongtags(storage.strong);
                    props.addPoints();
                    setAnswer("");
                    setSuccess(false);
                    setCorrect(true);
                    props.addPage();
                  } else if (props.type == "closed" && answ !== Answer) {
                    // incorrect closed answer
                    setSuccess(false);
                    props.tags.map((tag: number) => {
                      storage.weak.push(tag);
                    });
                    props.addWeaktags && props.addWeaktags(storage.weak);
                    props.addLostPoints();
                    setAnswer("");
                    setIncorrect(true);
                    props.addPage();
                  }

                  if (props.type == "open" && !Success) {
                    // correct open answer
                    setSuccess(true);
                  } else if (props.type == "open" && Success) {
                    // incorrect open answer
                    props.addPoints(JSON.parse(OpenAnswer));
                    props.addLostPoints(props.points - JSON.parse(OpenAnswer));
                    setSuccess(false);
                    props.addPage();
                  }
                }}
              >
                {Success ? "შემდეგი" : "შემოწმება"}
              </Btn>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
