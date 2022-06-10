export const __createContainer = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
};

export const __addCSS = file => {
  const styleElement = document.createElement("LINK");
  styleElement.type = "text/css";
  styleElement.rel = "stylesheet";
  styleElement.href = file;

  return styleElement;
};

export const __render = (elements, containerEl) => {
  const container = __createContainer();
  elements.forEach(el => container.appendChild(el));
  const css = __addCSS("/style.css");

  document.head.appendChild(css);
  containerEl.appendChild(container);
};
