const getGammaRate = require("./getGammaRate");
const getEpsilonRate = require("./getEpsilonRate");
const input = require("./input");

console.log(getGammaRate(input) * getEpsilonRate(input));
