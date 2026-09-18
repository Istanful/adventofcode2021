const getDiagonalIntersections = require("./getDiagonalIntersections");

module.exports = function isIntersecting(lineA, lineB) {
  return getDiagonalIntersections(lineA, lineB).length > 0;
};
