/* 
    Problem Suggesting Algorithm

    version 1

    i: problem

    d: find problems with similar tags

    o: problems

    version 2

    i: tag

    d: find problems with input tag

    o: problems
*/

import math_json from "./math.json";
const math: any = math_json;

// version 1
export function PSAProblem(year: number, version: number, number: number) {
  const Tags: number[] = [];
  const Problems: Scheme[] = [];
  math[year].map((problem: Scheme) => {
    if (problem.version == version && problem.number == number) {
      Tags.push(...problem.tags);
    } else {
      problem.tags.map((tag) => {
        if (Tags.includes(tag)) {
          Problems.push(problem);
        }
      });
    }
  });
  return Problems;
}

// version 2

export function PSATag(intag: number) {
  const Problems: Scheme[] = [];
  math[2023].map((problem: Scheme) => {
    problem.tags.map((tag) => {
      if (intag == tag) {
        Problems.push(problem);
      }
    });
  });
  return Problems;
}
