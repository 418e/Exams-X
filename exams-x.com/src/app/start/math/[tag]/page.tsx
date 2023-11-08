"use client";
import { useParams } from "next/navigation";
import { PSATag, translate, getImage } from "@/data";
import { Test } from "@/components";

export default function MathTags() {
  const tag = useParams().tag;
  return (
    <>
      <h1 className="w-full text-center my-8 text-3xl font-bold cursor-pointer">
        {/* @ts-ignore */}
        {translate(tag).tag}
      </h1>
      <ul>
        {
          /* @ts-ignore */
          PSATag(tag).map((prob: Scheme) => {
            return (
              <li key={prob.year + prob.version + prob.number}>
                <Test
                  year={prob.year}
                  version={prob.version}
                  type={prob.type}
                  image={getImage(prob.year, prob.version, prob.number, "math")}
                  points={prob.points}
                  answer={prob.answer}
                  number={prob.number}
                  tags={prob.tags}
                  doanswers={false}
                />
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
