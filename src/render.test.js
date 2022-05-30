import { __createContainer, __addCSS, __render } from "./render.js";

describe("render", () => {
  describe("create a container", () => {
    it("returns a container", () => {
      const result = __createContainer();
      expect(result.classList).toContain("container");
    });
  });
  describe("create css link", () => {
    it("returns a css link", () => {
      const result = __addCSS("./example.css");
      expect(result.tagName).toEqual("LINK");
      expect(result.rel).toEqual("stylesheet");
      expect(result.type).toEqual("text/css");
      expect(result.href).toContain("example.css");
    });
  });
  it("renders input elements on specified DOM element", () => {
    const elOne = document.createElement("div");
    const elTwo = document.createElement("div");
    const domEl = document.createElement("div");
    const elements = [elOne, elTwo];

    __render(elements, domEl);

    expect(domEl.children.length).toEqual(1);
    expect(domEl.children[0].children[0]).toBe(elements[0]);
    expect(domEl.children[0].children[1]).toBe(elements[1]);
  });
  it("adds a CSS link to the document", () => {
    const elOne = document.createElement("div");
    const elTwo = document.createElement("div");

    const elements = [elOne, elTwo];
    const css = document.head.getElementsByTagName("link")[0];
    __render(elements, document.body);

    expect(css.href).toContain("style.css");
  });
});