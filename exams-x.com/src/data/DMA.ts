/*
    Data Managment Algorithm
*/

/* 
    Endpoints

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

*/

/* 
    Imports
*/

import math_json from "./math.json";

/* 
    Configuration
*/

const math: any = math_json;
const geo: any = math_json;
const eng: any = math_json;

/* 
    Functions
*/

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

function ByYear(year: number, random: boolean, lang: lang) {
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

function ByVersion(year: number, version: number, random: boolean, lang: lang) {
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

function ByVersionPoints(
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

function ByPoints(year: number, points: number, random: boolean, lang: lang) {
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

function getImage(year: number, version: number, number: number, lang: lang) {
  return `/${lang}_${year}_${version}/${number}.png`;
}

// returns /{subject}_{year}_{version}_answers/{answer}

function getAnswers(
  year: number,
  version: number,
  answer: string[],
  lang: lang
) {
  const data: string[] = [];
  answer.map((answ: string) => data.push(`/${lang}_${year}_${version}_answers/${answ}`));
  return data;
}

// returns Type Scheme

function ReturnScheme(e: Scheme) {
  return {
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
  };
}

/* 
    Algorithms
*/

// Data Managment Algorithm

export function calculate(
  year: number,
  version: number,
  points: number,
  quantity: number,
  random: number
): Calculation[] {
  const calculated: Calculation[] = [];
  if (version == 0 && points == 0) {
    // Configuration 1: version = all & points = all
    const data: Scheme[] = ByYear(year, random == 0 && true, "math");
    data.map((e: Scheme) => {
      calculated.push(ReturnScheme(e));
    });
    return calculated;
  } else if (version !== 0 && points == 0) {
    // Configratuin 2: version != all & points = all
    const data: Scheme[] = ByVersion(
      year,
      version,
      random == 0 && true,
      "math"
    );

    data.map((e: Scheme) => {
      calculated.push(ReturnScheme(e));
    });
    return calculated;
  } else if (version !== 0 && points !== 0) {
    // Configuration 3: version != all & points != all
    console.log("configuration 3");
    const data: Scheme[] = ByVersionPoints(
      year,
      version,
      points,
      random == 0 && true,
      "math"
    );

    data.map((e: Scheme) => {
      calculated.push(ReturnScheme(e));
    });
    return calculated;
  } else if (version == 0 && points !== 0) {
    // Configuration 4: version = all & points != all
    const data: Scheme[] = ByPoints(year, points, random == 0 && true, "math");

    data.map((e: Scheme) => {
      calculated.push(ReturnScheme(e));
    });
    return calculated;
  } else {
    // Escape Configuration 0 = Configuration 1
    const data: Scheme[] = ByYear(year, random == 0 && true, "math");

    data.map((e: Scheme) => {
      calculated.push(ReturnScheme(e));
    });
    return calculated;
  }
}
