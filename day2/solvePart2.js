const input = require("./input");
const driveSubmarineV2 = require("./driveSubmarineV2");

const position = driveSubmarineV2(input);
console.log(position.x * position.y);
