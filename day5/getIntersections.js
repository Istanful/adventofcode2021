const isIntersecting = require("./isIntersecting");
const isHorizontal = require("./isHorizontal");
const isVertical = require("./isVertical");

module.exports = function getIntersections(lineA, lineB) {
  if (!isIntersecting(lineA, lineB)) {
    return [];
  }

  if (isHorizontal(lineA)) {
    if (isHorizontal(lineB)) {
      const aMinX = Math.min(lineA[0][0], lineA[1][0]);
      const aMaxX = Math.max(lineA[0][0], lineA[1][0]);
      const bMinX = Math.min(lineB[0][0], lineB[1][0]);
      const bMaxX = Math.max(lineB[0][0], lineB[1][0]);
      const startX = Math.max(aMinX, bMinX);
      const endX = Math.min(aMaxX, bMaxX);
      const count = endX - startX;

      return Array(count + 1)
        .fill(null)
        .map((_, i) => {
          return [startX + i, lineA[0][1]];
        });
    }

    return [[lineB[0][0], lineA[0][1]]];
  }

  if (isVertical(lineB)) {
    const aMinY = Math.min(lineA[0][1], lineA[1][1]);
    const aMaxY = Math.max(lineA[0][1], lineA[1][1]);
    const bMinY = Math.min(lineB[0][1], lineB[1][1]);
    const bMaxY = Math.max(lineB[0][1], lineB[1][1]);
    const startY = Math.max(aMinY, bMinY);
    const endY = Math.min(aMaxY, bMaxY);
    const count = endY - startY;

    return Array(count + 1)
      .fill(null)
      .map((_, i) => {
        return [lineA[0][0], startY + i];
      });
  }

  return [[lineA[0][0], lineB[0][1]]];
};
