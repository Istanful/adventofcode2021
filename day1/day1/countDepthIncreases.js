function countDepthIncreases(report) {
  const [firstMeasurement, ...rest] = report;
  return rest.reduce((count, measurement, i) => {
    const lastMeasurement = rest[i - 1] ?? firstMeasurement;

    if (measurement > lastMeasurement) {
      return count + 1;
    }

    return count;
  }, 0);
}

console.assert(
  countDepthIncreases([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]) === 7
);

module.exports = countDepthIncreases;
