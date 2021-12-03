const countBits = require("./countBits");

function getEpsilonRate(strings) {
  const length = strings[0].length;
  const str = countBits(strings).reduce((str, counts) => {
    if (counts["0"] < counts["1"]) {
      return `${str}0`;
    }

    return `${str}1`;
  }, "");

  return parseInt(str, 2);
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

console.assert(getEpsilonRate(numbers) === 0b01001);
module.exports = getEpsilonRate;
