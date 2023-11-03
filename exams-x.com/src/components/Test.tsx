import { useState } from "react";

export default function Test(props: CalculationWithFn) {
  const [Answer, setAnswer] = useState("");
  const [OpenAnswer, setOpenAnswer] = useState("");
  const [Success, setSuccess] = useState(false);
  return (
    <section
      key={props.year + props.version + props.number}
      className="flex flex-col border-y-4 border-black dark:border-white pt-12"
    >
      <div className="w-full min-h-screen flex flex-col">
        <div className="m-4 w-full text-center">
          {props.year}, ვარიანტი {props.version} / N{props.number} (
          {props.points} ქულა)
        </div>
        <div className="w-full flex justify-center">
          <img
            src={props.image}
            className="h-[50vh] lg:h-[60vh] w-full lg:w-[50vw] border-b-2 border-black dark:border-white select-none object-contain pb-2"
          />
        </div>
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
                      <img
                        key={e}
                        src={e}
                        className="h-[70vh] lg:h-[80vh] w-full lg:w-[50vw] border-b-2 border-black dark:border-white select-none object-contain pb-2"
                      />
                    );
                  })}
              </div>
              <div className="w-full flex justify-center my-8">
                <input
                  type="text"
                  className="border border-black dark:border-white dark:bg-black focus:outline-none p-1 rounded-md"
                  onChange={(e) => {
                    setOpenAnswer(e.target.value);
                  }}
                />
              </div>
            </>
          )}
          <div className="w-full flex justify-center my-8">
            <button
              className={`border-2 p-2 rounded-md ${
                Success && "border-gren-900"
              } border-black text-black dark:border-white hover:text-white dark:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white transition-all`}
              onClick={() => {
                const answ = props.answer[0][props.answer[0].length - 1];

                if (props.type == "closed" && answ == Answer) {
                  // correct closed answer
                  setSuccess(true);
                  props.addPoints();
                  setAnswer("");
                  setSuccess(false);
                  props.addPage();
                } else if (props.type == "closed" && answ !== Answer) {
                  // incorrect closed answer
                  setSuccess(false);
                  props.addLostPoints();
                  setAnswer("");
                  props.addPage();
                }

                if (props.type == "open" && !Success) {
                  // correct open answer
                  setSuccess(true);
                } else if (props.type == "open" && Success) {
                  // incorrect open answer
                  setSuccess(false);
                  props.addPage();
                }
              }}
            >
              {Success ? "შემდეგი" : "შემოწმება"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
