const isHorizontal = require("./isHorizontal");

module.exports = function isIntersecting(lineA, lineB) {
  const [[aX1, aY1], [aX2, aY2]] = lineA;
  const [[bX1, bY1], [bX2, bY2]] = lineB;

  if (isHorizontal(lineA)) {
    return (
      Math.min(bX1, bX2) <= Math.max(aX1, aX2) &&
      Math.max(bX1, bX2) >= Math.min(aX1, aX2) &&
      Math.min(bY1, bY2) <= Math.max(aY1, aY2) &&
      Math.max(bY1, bY2) >= Math.min(aY1, aY2)
    );
  }

  return (
    Math.min(aX1, aX2) <= Math.max(bX1, bX2) &&
    Math.max(aX1, aX2) >= Math.min(bX1, bX2) &&
    Math.min(aY1, aY2) <= Math.max(bY1, bY2) &&
    Math.max(aY1, aY2) >= Math.min(bY1, bY2)
  );
};
