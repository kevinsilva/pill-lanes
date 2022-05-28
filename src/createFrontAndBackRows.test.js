import { makeDataCopies } from "./utilities.js";
import { calculateLayout } from "./calculateLayout.js";
import { createRow, createFrontAndBackRows } from "./createFrontAndBackRows.js";

describe("create front and back rows", () => {
  describe("create row", () => {
    describe("returns a row", () => {
      const result = createRow.create();
      expect(result.classList).toContain("row");
    });
  });
  it("returns a front and back row for each number of rows", () => {
    const data1 = calculateLayout.calculate(makeDataCopies(10));
    const data2 = calculateLayout.calculate(makeDataCopies(50));

    const test1 = createFrontAndBackRows.create(data1);
    const test2 = createFrontAndBackRows.create(data2);

    expect(test1.length).toBe(2);
    expect(test2.length).toBe(5);
    expect(test1[0].front.className).toBe("row row--1-front");
    expect(test1[0].back.className).toBe("row row--1-back");
    expect(test2[1].front.className).toBe("row row--2-front");
    expect(test2[1].back.className).toBe("row row--2-back");
    expect(test2[4].front.className).toBe("row row--5-front");
    expect(test2[4].back.className).toBe("row row--5-back");
  });
});
