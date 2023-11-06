const fs = require('fs')

const settings = {
  year: 2024,
  version: 1,
  number: 1,
  points: 1,
  type: "closed",
  answer: "ბ",
  tags: [104],
};


fs.readFile("src/data/math.json", (err, data) => {
    const File = JSON.parse(data.toString());
    console.log(File)
    File[settings.year].push(settings);
    fs.writeFile("src/data/math.json", JSON.stringify(File), function (err) {
      if (err) throw err;
      console.log("Updated");
    });
})