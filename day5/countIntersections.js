module.exports = function countIntersections(intersections) {
  const counts = {};
  intersections.forEach((intersection) => {
    const count = counts[intersection] ?? 0;
    counts[intersection] = count + 2;
  });
  return counts;
};
