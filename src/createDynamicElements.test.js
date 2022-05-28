import { makeDataCopies } from "./utilities.js";
import { __calculateLayout } from "./calculateLayout.js";
import {
  createRowContainer,
  createPill,
  createDynamicElements,
} from "./createDynamicElements";

describe("create dynamic elements", () => {
  describe("create a row-container", () => {
    it("returns a row-container", () => {
      const result = createRowContainer.create();
      expect(result.classList).toContain("row-container");
    });
  });
  describe("create pill", () => {
    it("returns a pill", () => {
      const data = {
        label: "testLabel",
        img: "testImg",
        link: "testLink",
      };

      const result = createPill.create(data);
      const img = result.children[0];
      const text = result.children[1];

      expect(result.classList).toContain("pill");
      expect(result.tagName).toEqual("A");
      expect(result.href).toContain(data.link);
      expect(result.target).toContain("_blank");
      expect(img.src).toContain(data.img);
      expect(img.tagName).toEqual("IMG");
      expect(img.classList).toContain("pill__img");
      expect(text.tagName).toEqual("P");
      expect(text.classList).toContain("pill__text");
      expect(text.textContent).toContain(data.label);
    });
  });
  it("returns a row-container for each number of rows", () => {
    //ARRANGE
    const data1 = __calculateLayout(makeDataCopies(10));
    const data2 = __calculateLayout(makeDataCopies(50));
    //ACT
    const test1 = createDynamicElements.create(data1);
    const test2 = createDynamicElements.create(data2);
    //ASSERT
    expect(test1.rowContainers.length).toBe(2);
    expect(test2.rowContainers.length).toBe(5);
  });

  it("has a front and a back row for each number of rows", () => {
    const data = __calculateLayout(makeDataCopies(6));
    const test = createDynamicElements.create(data);

    expect(test.rowContainers[0].children.length).toBe(2);
    expect(test.rowContainers[0].children[0].classList).toContain(
      "row--1-front"
    );
    expect(test.rowContainers[0].children[1].classList).toContain(
      "row--1-back"
    );
  });
  it("has one pill element for each data inside of a row", () => {
    const data1 = __calculateLayout(makeDataCopies(6));
    const test1 = createDynamicElements.create(data1);

    const row = test1.rowContainers[0].children[0];
    const pills = row.children;

    expect(pills.length).toBe(6);
    Array.from(pills).forEach((pill) =>
      expect(pill.classList).toContain("pill")
    );
  });
});
