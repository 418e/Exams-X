interface Calculation {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "open" | "closed";
  image: string;
  answerIsImage: boolean;
  answer: string | string[];
}

interface CalculationWithFn {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "open" | "closed";
  image: string;
  answerIsImage: boolean;
  answer: string | string[];
  addPage: any;
  removePage: any;
  addPoints: any;
  addLostPoints: any;
}

interface Scheme {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "closed" | "open";
  answer: string | string[];
}

type lang = "math" | "geo" | "eng";
