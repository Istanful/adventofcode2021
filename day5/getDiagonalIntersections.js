const isVertical = require("./isVertical");
const isHorizontal = require("./isHorizontal");

module.exports = function getDiagonalIntersections(lineA, lineB) {
  const [[aX1, aY1], [aX2, aY2]] = lineA;
  const [[bX1, bY1], [bX2, bY2]] = lineB;
  const aK = (aY2 - aY1) / (aX2 - aX1);
  const aM = aY1 - aK * aX1;
  const bK = (bY2 - bY1) / (bX2 - bX1);
  const bM = bY1 - bK * bX1;
  const minAX = Math.min(aX1, aX2);
  const minBX = Math.min(bX1, bX2);
  const maxAX = Math.max(aX1, aX2);
  const maxBX = Math.max(bX1, bX2);
  const isInHorizontalRange =
    Math.min(bX1, bX2) <= Math.max(aX1, aX2) &&
    Math.max(bX1, bX2) >= Math.min(aX1, aX2);
  const isInVerticalRange =
    Math.min(bY1, bY2) <= Math.max(aY1, aY2) &&
    Math.max(bY1, bY2) >= Math.min(aY1, aY2);
  const isInRange = isInHorizontalRange && isInVerticalRange;

  if (!isInRange) {
    return [];
  }

  if (isVertical(lineA) && isVertical(lineB)) {
    const [[aX1, aY1], [aX2, aY2]] = lineA;
    const [[bX1, bY1], [bX2, bY2]] = lineB;
    const isInRange =
      Math.min(aX1, aX2) <= Math.max(bX1, bX2) &&
      Math.max(aX1, aX2) >= Math.min(bX1, bX2) &&
      Math.min(aY1, aY2) <= Math.max(bY1, bY2) &&
      Math.max(aY1, aY2) >= Math.min(bY1, bY2);

    if (!isInRange) {
      return [];
    }

    const aMinY = Math.min(lineA[0][1], lineA[1][1]);
    const aMaxY = Math.max(lineA[0][1], lineA[1][1]);
    const bMinY = Math.min(lineB[0][1], lineB[1][1]);
    const bMaxY = Math.max(lineB[0][1], lineB[1][1]);
    const startY = Math.max(aMinY, bMinY);
    const endY = Math.min(aMaxY, bMaxY);
    const count = Math.max(endY, startY) - Math.min(endY, startY);

    const intersections = Array(count + 1)
      .fill(null)
      .map((_, i) => {
        return [lineA[0][0], startY + i];
      });

    return intersections;
  }

  if (isVertical(lineB)) {
    const aY = aK * bX1 + aM;

    if (
      aY < Math.min(bY1, bY2) ||
      aY > Math.max(bY1, bY2) ||
      bX1 < Math.min(aX1, aX2) ||
      bX1 > Math.max(aX1, aX2)
    ) {
      return [];
    }

    return [[bX1, aK * bX1 + aM]];
  }

  if (isVertical(lineA)) {
    const bY = bK * aX1 + bM;

    if (
      bY < Math.min(aY1, aY2) ||
      bY > Math.max(aY1, aY2) ||
      aX1 < Math.min(bX1, bX2) ||
      aX1 > Math.max(bX1, bX2)
    ) {
      return [];
    }

    return [[aX1, bK * aX1 + bM]];
  }

  if (aM === bM && aK === bK) {
    const startX = Math.max(minAX, minBX);
    const endX = Math.min(maxAX, maxBX);
    const count = Math.max(endX, startX) - Math.min(startX, endX) + 1;

    return Array(count)
      .fill(null)
      .map((_, i) => [startX + i, aK * (startX + i) + aM]);
  }

  const guessX = (bM - aM) / (aK - bK);
  const guessY = aK * guessX + aM;

  if (guessY - aK * guessX === aM && guessY - bK * guessX === bM) {
    return [[guessX, guessY]];
  }

  return [];
};
