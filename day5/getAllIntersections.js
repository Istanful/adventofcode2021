const isHorizontal = require("./isHorizontal");
const isVertical = require("./isVertical");
const getIntersections = require("./getIntersections");

module.exports = function getAllIntersections(lines) {
  const applicableLines = lines.filter(
    (line) => isHorizontal(line) || isVertical(line)
  );
  return applicableLines.reduce((acc, line, i) => {
    const otherLines = applicableLines.slice(i + 1);
    return [
      ...acc,
      ...otherLines
        .flatMap((otherLine) => getIntersections(line, otherLine))
        .filter(Boolean),
    ];
  }, []);
};
