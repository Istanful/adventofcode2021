const isIntersecting = require("./isIntersecting");

describe("isIntersecting", () => {
  [
    [
      [
        [0, 1],
        [2, 1],
      ],
      [
        [1, 0],
        [1, 2],
      ],
      true,
    ],
    [
      [
        [0, 0],
        [2, 0],
      ],
      [
        [3, 0],
        [4, 0],
      ],
      false,
    ],
    [
      [
        [0, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [2, 1],
      ],
      false,
    ],
    [
      [
        [1, 0],
        [1, 2],
      ],
      [
        [0, 1],
        [2, 1],
      ],
      true,
    ],
    [
      [
        [0, 0],
        [1, 0],
      ],
      [
        [1, 0],
        [2, 0],
      ],
      true,
    ],
  ].forEach(([lineA, lineB, intersecting]) => {
    describe(`when given ${lineA} vs ${lineB}`, () => {
      it(`returns ${intersecting}`, () => {
        expect(isIntersecting(lineA, lineB)).toEqual(intersecting);
      });
    });
  });
});
