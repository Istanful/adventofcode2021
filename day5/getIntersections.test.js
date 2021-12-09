const getIntersections = require("./getIntersections");

describe("getIntersections", () => {
  describe("when no intersection", () => {
    it("returns undefined", () => {
      const lineA = [
        [0, 0],
        [2, 0],
      ];
      const lineB = [
        [3, 0],
        [4, 0],
      ];

      const intersections = getIntersections(lineA, lineB);

      expect(intersections).toEqual([]);
    });
  });

  describe("when intersection horizontal to vertical", () => {
    it("returns the coordinate of the intersection", () => {
      const lineA = [
        [0, 1],
        [2, 1],
      ];
      const lineB = [
        [1, 0],
        [1, 2],
      ];

      const intersection = getIntersections(lineA, lineB);

      expect(intersection).toEqual([[1, 1]]);
    });
  });

  describe("when intersection horizontal to horizontal", () => {
    it("returns the coordinates of the intersection", () => {
      const lineA = [
        [0, 0],
        [2, 0],
      ];
      const lineB = [
        [1, 0],
        [3, 0],
      ];

      const intersections = getIntersections(lineA, lineB);

      expect(intersections).toEqual([
        [1, 0],
        [2, 0],
      ]);
    });
  });

  describe("when intersection vertical to horizontal", () => {
    it("returns the coordinate of the intersection", () => {
      const lineA = [
        [1, 0],
        [1, 2],
      ];
      const lineB = [
        [0, 1],
        [2, 1],
      ];

      const intersections = getIntersections(lineA, lineB);

      expect(intersections).toEqual([[1, 1]]);
    });
  });

  describe("when intersection vertical to vertical", () => {
    it("returns the coordinate of the intersection", () => {
      const lineA = [
        [0, 0],
        [0, 2],
      ];
      const lineB = [
        [0, 1],
        [0, 3],
      ];

      const intersections = getIntersections(lineA, lineB);

      expect(intersections).toEqual([
        [0, 1],
        [0, 2],
      ]);
    });
  });
});
