const Board = require("./Board");
const { boards, numbers } = require("./input");

const wonBoards = [];

numbers.forEach((num) => {
  boards.forEach((board) => {
    board.play(num);

    if (board.hasBingo && !wonBoards.includes(board)) {
      wonBoards.push(board);

      if (wonBoards.length >= boards.length) {
        console.log(board.score);
        process.exit();
      }
    }
  });
});
