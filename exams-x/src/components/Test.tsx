import { useState } from "react";

export default function Test(props: Calculation) {
  const [Answer, setAnswer] = useState("");
  const [OpenAnswer, setOpenAnswer] = useState("");
  const [Success, setSuccess] = useState(false);
  return (
    <section
      key={props.year + props.version + props.number}
      className="flex h-screen"
    >
      <div className="w-[120vw] h-screen flex flex-col">
        <div className="m-4">
          {props.year}, ვარიანტი {props.version} / N{props.number} (
          {props.points} ქულა)
        </div>
        <img src={props.image} className="h-[35vw] w-full" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (props.type == "closed") {
              props.answer == Answer && setSuccess(true);
            } else {
            }
          }}
        >
          {props.type == "closed" ? (
            <fieldset className="flex justify-around">
              <div>
                <input
                  type="radio"
                  name="a"
                  id="a"
                  value="ა"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <label htmlFor="a">ა</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="b"
                  id="b"
                  value="ბ"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <label htmlFor="b">ბ</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="g"
                  id="g"
                  value="გ"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <label htmlFor="g">გ</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="d"
                  id="d"
                  value="დ"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <label htmlFor="d">დ</label>
              </div>
            </fieldset>
          ) : (
            <>
              <input
                type="text"
                onChange={(e) => {
                  setOpenAnswer(e.target.value);
                }}
              />
            </>
          )}

          <button type="submit" className={"" + Success && "text-green-500"}>
            {Success ? "შემდეგი" : "შემოწმება"}
          </button>
        </form>
      </div>
      <div className="w-full h-screen bg-green-900"></div>
    </section>
  );
}
