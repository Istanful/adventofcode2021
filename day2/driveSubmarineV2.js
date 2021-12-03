function driveSubmarine(instructions, position = { x: 0, y: 0, aim: 0 }) {
  return instructions.reduce((pos, instruction) => {
    const [direction, countStr] = instruction.split(" ");
    const count = parseInt(countStr);

    switch (direction) {
      case "forward":
        return { ...pos, x: pos.x + count, y: pos.y + pos.aim * count };
      case "down":
        return { ...pos, aim: pos.aim + count };
      case "up":
        return { ...pos, aim: pos.aim - count };
    }
  }, position);
}

const expectedPosition = { x: 15, y: 60, aim: 10 };
const instructions = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

console.assert(
  JSON.stringify(driveSubmarine(instructions)) ===
    JSON.stringify(expectedPosition)
);

module.exports = driveSubmarine;
