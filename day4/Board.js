module.exports = class Board {
  constructor(tokens) {
    this.tokens = tokens;
    this.markedTokens = [];
  }

  play(number) {
    this.markedTokens.push(number);
  }

  static fromString(string) {
    return new Board(
      string.split("\n").map((row) =>
        row
          .trim()
          .split(/ +/)
          .map((str) => parseInt(str, 10))
      )
    );
  }

  get hasBingo() {
    return this.tokens.some((row, i) => {
      const column = this.tokens.map((row) => row[i]);
      return (
        row.every((token) => this.markedTokens.includes(token)) ||
        column.every((token) => this.markedTokens.includes(token))
      );
    });
  }

  get score() {
    return (
      this.unmarkedTokens.reduce((sum, num) => sum + num, 0) *
      this.markedTokens[this.markedTokens.length - 1]
    );
  }

  get unmarkedTokens() {
    return this.tokens
      .flat()
      .filter((token) => !this.markedTokens.includes(token));
  }
};
