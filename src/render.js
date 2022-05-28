export const createContainer = (function () {
  function _creation() {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
  }

  function create() {
    return _creation();
  }
  return {
    create: create,
  };
})();

export const addCSS = (function () {
  function _addition(file) {
    const styleElement = document.createElement("LINK");
    styleElement.type = "text/css";
    styleElement.rel = "stylesheet";
    styleElement.href = file;

    return styleElement;
  }

  function add(file) {
    return _addition(file);
  }
  return {
    add: add,
  };
})();

export const render = (function () {
  function _rendering(elements, containerEl) {
    const container = createContainer.create();
    elements.forEach((el) => container.appendChild(el));
    const css = addCSS.add("../style.css");

    document.head.appendChild(css);
    containerEl.appendChild(container);
  }

  function init(elements, containerEl) {
    return _rendering(elements, containerEl);
  }

  return {
    init: init,
  };
})();
