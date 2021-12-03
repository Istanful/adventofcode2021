const countBits = require("./countBits");

function getCO2ScrubberRating(strings) {
  const length = strings[0].length;
  let filteredStrings = strings;

  for (let i = 0; i < length; i++) {
    const counts = countBits(filteredStrings);
    const keepBit = counts[i]["0"] <= counts[i]["1"] ? "0" : "1";
    filteredStrings = filteredStrings.filter((str) => str[i] === keepBit);

    if (filteredStrings.length <= 1) {
      return parseInt(filteredStrings[0], 2);
    }
  }
}

const numbers = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

console.assert(getCO2ScrubberRating(numbers) === 10);

module.exports = getCO2ScrubberRating;
