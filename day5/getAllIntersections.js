const getIntersections = require("./getIntersections");

module.exports = function getAllIntersections(lines, filter = () => true) {
  const applicableLines = lines.filter(filter);
  return applicableLines.reduce((acc, line, i) => {
    const otherLines = applicableLines.slice(i + 1);

    return [
      ...acc,
      ...otherLines.flatMap((otherLine) => getIntersections(line, otherLine)),
    ];
  }, []);
};
