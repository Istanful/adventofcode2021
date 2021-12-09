module.exports = function countIntersections(intersections) {
  return intersections.reduce((counts, intersection) => {
    const count = counts[intersection] ?? 0;
    return { ...counts, [intersection]: count + 2 };
  }, {});
};
