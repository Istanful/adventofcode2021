module.exports = function isHorizontal(line) {
  const [[, y1], [, y2]] = line;
  return y1 === y2;
};
