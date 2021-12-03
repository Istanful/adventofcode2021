function sum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function getSlidingSums(reports, size = 3) {
  let sums = [];

  for (let i = 0; i <= reports.length - size; i++) {
    const measurements = reports.slice(i, i + size);
    sums.push(sum(measurements));
  }

  return sums;
}

const reports = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const expected = [607, 618, 618, 617, 647, 716, 769, 792];
console.assert(
  JSON.stringify(getSlidingSums(reports)) === JSON.stringify(expected)
);

module.exports = getSlidingSums;
