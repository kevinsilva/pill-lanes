import { pill_lanes } from "./pill-lanes.js";
import { makeDataCopies } from "./utilities.js";

describe("Pill-Lanes", () => {
  describe("pill-lanes", () => {
    it("returns null when there are no data", () => {
      expect(pill_lanes()).toEqual(null);
      expect(pill_lanes([])).toEqual(null);
    });
    it("throws an error when the target container does not exist", () => {
      const result = pill_lanes([{}]);
      expect(result).toEqual(new Error("target container not found"));
    });
    it("renders data objects into rows of pills", () => {
      pill_lanes(makeDataCopies(30), document.body);
      const container = document.body.children[0];

      expect(container.classList).toContain("container");
      expect(container.children.length).toEqual(5);
      expect(container.children[0].classList).toContain("row-container");
    });
  });
});