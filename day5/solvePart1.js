const countIntersections = require("./countIntersections");
const getAllIntersections = require("./getAllIntersections");
const parseLines = require("./parseLines");
const input = require("./input");

const lines = parseLines(input);
const intersections = getAllIntersections(lines);
console.log(Object.keys(countIntersections(intersections)).length);
