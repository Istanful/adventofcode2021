const driveSubmarine = require("./driveSubmarine");
const input = require("./input");

const position = driveSubmarine(input);
console.log(position.x * position.y);
