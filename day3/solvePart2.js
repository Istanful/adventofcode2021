const getOxygenGeneratorRating = require("./getOxygenGeneratorRating");
const getCO2ScrubberRating = require("./getCO2ScrubberRating");
const input = require("./input");

console.log(getOxygenGeneratorRating(input) * getCO2ScrubberRating(input));
