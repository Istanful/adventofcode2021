const Board = require("./Board");

describe("Board", () => {
  describe("#hasBingo", () => {
    describe("when no winner", () => {
      it("returns false", () => {
        const board = Board.fromString(
          `14 21 17 24  4
          10 16 15  9 19
          18  8 23 26 20
          22 11 13  6  5
           2  0 12  3  7`
        );

        board.play(7);

        expect(board.hasBingo).toEqual(false);
      });
    });

    describe("when board has a horizontal winner", () => {
      it("returns true", () => {
        const board = Board.fromString(
          `14 21 17 24  4
          10 16 15  9 19
          18  8 23 26 20
          22 11 13  6  5
           2  0 12  3  7`
        );

        board.play(14);
        board.play(21);
        board.play(17);
        board.play(24);
        board.play(4);

        expect(board.hasBingo).toEqual(true);
      });
    });

    describe("when board has a vertical winner", () => {
      it("returns true", () => {
        const board = Board.fromString(
          `14 21 17 24  4
          10 16 15  9 19
          18  8 23 26 20
          22 11 13  6  5
           2  0 12  3  7`
        );

        board.play(14);
        board.play(10);
        board.play(18);
        board.play(22);
        board.play(2);

        expect(board.hasBingo).toEqual(true);
      });
    });
  });

  describe("score", () => {
    describe("when board has a vertical winner", () => {
      it("returns the score", () => {
        const board = Board.fromString(
          `14 21 17 24  4
          10 16 15  9 19
          18  8 23 26 20
          22 11 13  6  5
           2  0 12  3  7`
        );

        board.play(14);
        board.play(10);
        board.play(18);
        board.play(22);
        board.play(2);

        expect(board.score).toEqual(518);
      });
    });
  });
});
