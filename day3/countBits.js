module.exports = function countBits(strings) {
  const length = strings[0].length;
  return strings.reduce((counts, str) => {
    return counts.map((count, i) => {
      const char = str[i];
      return { ...count, [char]: count[char] + 1 };
    });
  }, Array(length).fill({ 0: 0, 1: 0 }));
};
