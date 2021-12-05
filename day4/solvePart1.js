const Board = require("./Board");
const { boards, numbers } = require("./input");

numbers.forEach((num) => {
  boards.forEach((board) => {
    board.play(num);

    if (board.hasBingo) {
      console.log(board.score);
      process.exit();
    }
  });
});
