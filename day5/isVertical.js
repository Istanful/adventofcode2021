module.exports = function isVertical(line) {
  const [[x1], [x2]] = line;
  return x1 === x2;
};
