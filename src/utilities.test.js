import { makeDataCopies } from "./utilities.js"

describe("Make-Data-Copies", () => {
  it("makes x number of copies of a test data object", () => {
    const oneCopy = makeDataCopies(1);
    const sixCopy = makeDataCopies(6);
    const hundredCopy = makeDataCopies(100);

    expect(oneCopy.length).toEqual(1);
    expect(sixCopy.length).toEqual(6);
    expect(hundredCopy.length).toEqual(100);
    expect(oneCopy[0].label).toEqual("testLabel");
    expect(oneCopy[0].img).toEqual("testImg");
    expect(oneCopy[0].link).toEqual("testLink");
  });
});