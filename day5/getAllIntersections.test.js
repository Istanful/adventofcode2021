const getAllIntersections = require("./getAllIntersections");

describe("getAllIntersections", () => {
  it("returns the intersections", () => {
    const lines = [
      [
        [0, 1],
        [2, 1],
      ],
      [
        [1, 0],
        [1, 2],
      ],
    ];

    const intersections = getAllIntersections(lines);

    expect(intersections).toEqual([[1, 1]]);
  });
});
