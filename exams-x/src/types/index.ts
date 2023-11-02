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

interface Scheme {
  year: number;
  version: number;
  number: number;
  points: number;
  type: "closed" | "open";
  answer: string | string[];
}

type lang = "math" | "geo" | "eng";
