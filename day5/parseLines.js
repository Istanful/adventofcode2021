function parseLines(str) {
  return str
    .split("\n")
    .map((row) => row.split(" -> "))
    .map((coords) =>
      coords.map((coord) => coord.split(",").map((val) => parseInt(val.trim())))
    );
}

module.exports = parseLines;
