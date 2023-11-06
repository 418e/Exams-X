# Guide to adding new tests

### Step 1

Turn pdf file of the test and its answers into the png.

[]

### Step 2

Create `{subject}_{year}_{version}` and `{subject}_{year}_{version}_answers` folders in the `/exams-x.com/public` directory. Replace `{subject}` with the subject of the test (Math, English, Biology....), `{year}` and `{version}` with year and versions of the tests.

### Step 3

Locate png versions of the problems in the `/exams-x.com/public/{subject}_{year}_{version}` and rename them according to their number. (for example: N7 problem would be `7.png`). If problem is a open question, locate its' answer with explanations in the `/exams-x.com/public/{subject}_{year}_{version}_answers` and name it after its' number. (for example: Answer of the problem N28 would be `28.png`)

### Step 4

Enter the data in the `const settings` in `examx-x.com/server/index.js`

```js
const settings = {
  year: 2023, // year of the test
  version: 1, // version of the test
  number: 2, // number of the problem
  points: 1, // points of the problem
  type: "closed", // type of the problem
  answer: "დ", // answer of the problem
};
// or
const settings = {
  year: 2023,
  version: 1,
  number: 40,
  points: 4,
  type: "open", // if type of the problem is open
  answer: ["40_1.png", "40_2.png"], // create array with names of the answer pictures you created in /{subject}_{year}_{version}_answers directory
};
```

And then run `node server/index.js` in the terminal

Visit [API Documentation] for more information.
