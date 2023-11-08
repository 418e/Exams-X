interface Calculation {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "open" | "closed";
  image: string;
  answerIsImage: boolean;
  answer: string | string[];
  tags: number[] | [];
}

interface CalculationWithFn {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "open" | "closed";
  image: string;
  answerIsImage?: boolean;
  answer: string | string[];
  tags: number[] | [];
  doanswers?: boolean;
  addPage?: any;
  removePage?: any;
  addPoints?: any;
  addLostPoints?: any;
  addStrongtags?: (tag: number[]) => any;
  addWeaktags?: (tag: number[]) => any;
}

interface Scheme {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "closed" | "open";
  answer: string | string[];
  tags: number[] | [];
}

type lang = "math" | "geo" | "eng";
