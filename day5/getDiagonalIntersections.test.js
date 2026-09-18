const getDiagonalIntersections = require("./getDiagonalIntersections");

describe("getDiagonalIntersections", () => {
  [
    [
      [
        [0, 0],
        [2, 2],
      ],
      [
        [2, 0],
        [0, 2],
      ],
      [[1, 1]],
    ],
    [
      [
        [0, 0],
        [2, 2],
      ],
      [
        [1, 1],
        [3, 3],
      ],
      [
        [1, 1],
        [2, 2],
      ],
    ],
    [
      [
        [0, 0],
        [2, 2],
      ],
      [
        [2, 0],
        [2, 2],
      ],
      [[2, 2]],
    ],
    [
      [
        [0, 0],
        [2, 0],
      ],
      [
        [2, 0],
        [0, 2],
      ],
      [[2, 0]],
    ],
    [
      [
        [0, 0],
        [1, 1],
      ],
      [
        [2, 2],
        [3, 3],
      ],
      [],
    ],
    [
      [
        [0, 0],
        [1, 1],
      ],
      [
        [0, 0],
        [2, 0],
      ],
      [[0, 0]],
    ],
    [
      [
        [0, 0],
        [1, 1],
      ],
      [
        [0, 2],
        [2, 2],
      ],
      [],
    ],
    [
      [
        [0, 0],
        [1, 0],
      ],
      [
        [-1, 0],
        [2, 0],
      ],
      [
        [0, 0],
        [1, 0],
      ],
    ],
    [
      [
        [0, 0],
        [1, 1],
      ],
      [
        [-1, -1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
      ],
    ],
  ].forEach(([lineA, lineB, expected]) => {
    describe(`when given ${lineA} and ${lineB}`, () => {
      it(`returns ${expected}`, () => {
        const intersections = getDiagonalIntersections(lineA, lineB);

        expect(intersections).toEqual(expected);
      });
    });
  });
});
