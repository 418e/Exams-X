/*

Endpoint scheme:

subject/year
subject/year/version
subject/year/version/flow
subject/year/version/points
subject/year/version/points/flow
subject/year/version/points/random
subject/year/version/random
subject/year/points
subject/year/points/flow
subject/year/points/random
subject/points/flow
subject/points/random


Endpoints:

math/2023 = math.json => 2023
math/2023/1
math/2023/1/flow =  2023 & version === 1 in order
math/2023/1/1pt/flow = 2023 & version === 1 & points = 1 in order
math/2023/1/1pt/random = 2023 & version === 1 & points = 1 in random
math/2023/1/3pt/flow = 2023 & version === 1 & points = 3 in order
math/2023/1/3pt/random = 2023 & version === 1 & points = 3 in random
math/2023/1/4pt/flow = 2023 & version === 1 & points = 4 in order
math/2023/1/4pt/random = 2023 & version === 1 & points = 4 in random
math/2023/1/random = 2023 & version === 1 in random
math/2023/2
math/2023/2/flow = 2023 & version === 2 in order
math/2023/2/1pt/flow = 2023 & version === 2 & points = 1 in order
math/2023/2/1pt/random = 2023 & version === 2 & points = 1 in random
math/2023/2/3pt/flow = 2023 & version === 2 & points = 3 in order
math/2023/2/3pt/random = 2023 & version === 2 & points = 3 in random
math/2023/2/4pt/flow = 2023 & version === 2 & points = 4 in order
math/2023/2/4pt/random = 2023 & version === 2 & points = 4 in random
math/2023/2/random = 2023 & version === 2 in random
math/2023/1pt/flow = 2023 & points = 1 in order
math/2023/1pt/random = 2023 & points = 1 in random
math/2023/3pt/flow = 2023 & points = 3 in order
math/2023/3pt/random = 2023 & points = 3 in random
math/2023/4pt/flow = 2023 & points = 4 in order
math/2023/4pt/random = 2023 & points = 1 in random

math/2022 = math.json => 2023
math/2022/1
math/2022/1/flow =  2022 & version === 1 in order
math/2022/1/1pt/flow = 2022 & version === 1 & points = 1 in order
math/2022/1/1pt/random = 2022 & version === 1 & points = 1 in random
math/2022/1/2pt/flow = 2022 & version === 1 & points = 2 in order
math/2022/1/2pt/random = 2022 & version === 1 & points = 2 in random
math/2022/1/3pt/flow = 2022 & version === 1 & points = 3 in order
math/2022/1/3pt/random = 2022 & version === 1 & points = 3 in random
math/2022/1/4pt/flow = 2022 & version === 1 & points = 4 in order
math/2022/1/4pt/random = 2022 & version === 1 & points = 4 in random
math/2022/1/random = 2022 & version === 1 in random
math/2022/2
math/2022/2/flow =  2022 & version === 2 in order
math/2022/2/1pt/flow = 2022 & version === 2 & points = 1 in order
math/2022/2/1pt/random = 2022 & version === 2 & points = 1 in random
math/2022/1/2pt/flow = 2022 & version === 2 & points = 2 in order
math/2022/1/2pt/random = 2022 & version === 2 & points = 2 in random
math/2022/2/3pt/flow = 2022 & version === 2 & points = 3 in order
math/2022/2/3pt/random = 2022 & version === 2 & points = 3 in random
math/2022/2/4pt/flow = 2022 & version === 2 & points = 4 in order
math/2022/2/4pt/random = 2022 & version === 2 & points = 4 in random
math/2022/2/random = 2022 & version === 2 in random
math/2022/1pt/flow = 2022 & points = 1 in order
math/2022/1pt/random = 2022 & points = 1 in random
math/2022/2pt/flow = 2022 & points = 2 in order
math/2022/2pt/random = 2022 & points = 2 in random
math/2022/3pt/flow = 2022 & points = 3 in order
math/2022/3pt/random = 2022 & points = 3 in random
math/2022/4pt/flow = 2022 & points = 4 in order
math/2022/4pt/random = 2022 & points = 1 in random


*/

import json from "./math.json";

const math: any = json;
const geo: any = json;
const eng: any = json;

// randomizer function

function randomize(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// returns subject/year or subject/year/random

export function ByYear(year: number, random: boolean, lang: lang) {
  switch (lang) {
    case "math":
      const data = math[year];
      random && randomize(data);
      return math[year];
    case "eng":
      const data2 = eng[year];
      random && randomize(data2);
      return eng[year];
    case "geo":
      const data3 = geo[year];
      random && randomize(data3);
      return geo[year];
  }
}

// returns subject/year/version/flow or subject/year/version/random

export function ByVersion(
  year: number,
  version: number,
  random: boolean,
  lang: lang
) {
  const data: Scheme[] = [];
  switch (lang) {
    case "math":
      math[year].map((e: Scheme) => {
        e.version == version && data.push(e);
      });
      break;
    case "eng":
      eng[year].map((e: Scheme) => {
        e.version == version && data.push(e);
      });
      break;
    case "geo":
      geo[year].map((e: Scheme) => {
        e.version == version && data.push(e);
      });
      break;
  }

  random && randomize(data);

  return data;
}

// returns subject/year/version/points/flow or subject/year/version/points/random

export function ByVersionPoints(
  year: number,
  version: number,
  points: number,
  random: boolean,
  lang: lang
) {
  const data: Scheme[] = [];

  switch (lang) {
    case "math":
      math[year].map((e: Scheme) => {
        e.version == version && e.points == points && data.push(e);
      });
      break;
    case "eng":
      eng[year].map((e: Scheme) => {
        e.version == version && e.points == points && data.push(e);
      });
      break;
    case "geo":
      geo[year].map((e: Scheme) => {
        e.version == version && e.points == points && data.push(e);
      });
      break;
  }

  random && randomize(data);
  return data;
}

// returns subject/year/points/flow or subject/year/points/random

export function ByPoints(
  year: number,
  points: number,
  random: boolean,
  lang: lang
) {
  const data: Scheme[] = [];

  switch (lang) {
    case "math":
      math[year].map((e: Scheme) => {
        e.points == points && data.push(e);
      });
      break;
    case "eng":
      eng[year].map((e: Scheme) => {
        e.points == points && data.push(e);
      });
      break;
    case "geo":
      geo[year].map((e: Scheme) => {
        e.points == points && data.push(e);
      });
      break;
  }

  random && randomize(data);
  return data;
}

// returns /{subject}_{year}_{version}/{number}.png

export function getImage(
  year: number,
  version: number,
  number: number,
  lang: lang
) {
  return `/${lang}_${year}_${version}/${number}.png`;
}

// returns /{subject}_{year}_{version}_answers/{answer}

export function getAnswers(
  year: number,
  version: number,
  answer: string[],
  lang: lang
) {
  const data: string[] = [`/${lang}_${year}_${version}/${answer}`];
  // answer.map((answ: string) => data.push(`/${lang}_${year}_${version}/${answ}`));
  return data;
}

// Data managment algorithm

export function calculate(
  year: number,
  version: number,
  points: number,
  quantity: number,
  random: number
): Calculation[] {
  const calculated: Calculation[] = [];
  if (version == 0 && points == 0) {
    console.log("configuration 1");
    const data: Scheme[] = ByYear(year, random == 0 && true, "math");
    data.map((e: Scheme) => {
      calculated.push({
        year: e.year,
        version: e.version,
        number: e.number,
        points: e.points,
        type: e.type,
        image: getImage(e.year, e.version, e.number, "math"),
        answerIsImage: e.type == "open",
        answer:
          e.type == "open" //@ts-ignore
            ? getAnswers(e.year, e.version, e.answer, "math")
            : e.answer,
      });
    });
    return calculated;
  } else if (version !== 0 && points == 0) {
    console.log("configuration 2");
    const data: Scheme[] = ByVersion(
      year,
      version,
      random == 0 && true,
      "math"
    );

    data.map((e: Scheme) => {
      calculated.push({
        year: e.year,
        version: e.version,
        number: e.number,
        points: e.points,
        type: e.type,
        image: getImage(e.year, e.version, e.number, "math"),
        answerIsImage: e.type == "open",
        answer:
          e.type == "open" //@ts-ignore
            ? getAnswers(e.year, e.version, e.answer, "math")
            : e.answer,
      });
    });
    return calculated;
  } else if (version !== 0 && points !== 0) {
    console.log("configuration 3");
    const data: Scheme[] = ByVersionPoints(
      year,
      version,
      points,
      random == 0 && true,
      "math"
    );

    data.map((e: Scheme) => {
      calculated.push({
        year: e.year,
        version: e.version,
        number: e.number,
        points: e.points,
        type: e.type,
        image: getImage(e.year, e.version, e.number, "math"),
        answerIsImage: e.type == "open",
        answer:
          e.type == "open" //@ts-ignore
            ? getAnswers(e.year, e.version, e.answer, "math")
            : e.answer,
      });
    });
    return calculated;
  } else if (version == 0 && points !== 0) {
    console.log("configuration 4");
    const data: Scheme[] = ByPoints(year, points, random == 0 && true, "math");

    data.map((e: Scheme) => {
      calculated.push({
        year: e.year,
        version: e.version,
        number: e.number,
        points: e.points,
        type: e.type,
        image: getImage(e.year, e.version, e.number, "math"),
        answerIsImage: e.type == "open",
        answer:
          e.type == "open" //@ts-ignore
            ? getAnswers(e.year, e.version, e.answer, "math")
            : e.answer,
      });
    });
    return calculated;
  } else {
    console.log("configuration 0");
    const data: Scheme[] = ByYear(year, random == 0 && true, "math");

    data.map((e: Scheme) => {
      calculated.push({
        year: e.year,
        version: e.version,
        number: e.number,
        points: e.points,
        type: e.type,
        image: getImage(e.year, e.version, e.number, "math"),
        answerIsImage: e.type == "open",
        answer:
          e.type == "open" //@ts-ignore
            ? getAnswers(e.year, e.version, e.answer, "math")
            : e.answer,
      });
    });
    return calculated;
  }
}
