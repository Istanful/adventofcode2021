const isHorizontal = require("./isHorizontal");
const isVertical = require("./isVertical");
const getDiagonalIntersections = require("./getDiagonalIntersections");
const isIntersecting = require("./isIntersecting");

module.exports = function getIntersections(lineA, lineB) {
  if (!isIntersecting(lineA, lineB)) {
    return [];
  }

  // if (isVertical(lineA) && isVertical(lineB)) {
  //   const [[aX1, aY1], [aX2, aY2]] = lineA;
  //   const [[bX1, bY1], [bX2, bY2]] = lineB;
  //   const isInRange =
  //     Math.min(aX1, aX2) <= Math.max(bX1, bX2) &&
  //     Math.max(aX1, aX2) >= Math.min(bX1, bX2) &&
  //     Math.min(aY1, aY2) <= Math.max(bY1, bY2) &&
  //     Math.max(aY1, aY2) >= Math.min(bY1, bY2);

  //   if (!isInRange) {
  //     return [];
  //   }

  //   const aMinY = Math.min(lineA[0][1], lineA[1][1]);
  //   const aMaxY = Math.max(lineA[0][1], lineA[1][1]);
  //   const bMinY = Math.min(lineB[0][1], lineB[1][1]);
  //   const bMaxY = Math.max(lineB[0][1], lineB[1][1]);
  //   const startY = Math.max(aMinY, bMinY);
  //   const endY = Math.min(aMaxY, bMaxY);
  //   const count = Math.max(endY, startY) - Math.min(endY, startY);

  //   const intersections = Array(count + 1)
  //     .fill(null)
  //     .map((_, i) => {
  //       return [lineA[0][0], startY + i];
  //     });

  //   // if (JSON.stringify(intersections) !== JSON.stringify(intersectionsB)) {
  //   //   console.log("FAK");
  //   //   console.table(intersectionsB);
  //   // }

  //   return intersections;
  // }

  return getDiagonalIntersections(lineA, lineB);
};
