import { calculateLayout } from "./calculateLayout.js";
import { createDynamicElements } from "./createDynamicElements.js";
import { render } from "./render.js";

export function pill_lanes(data, containerEl) {
  if (!data || data.length == 0) return null;
  if (!containerEl) return new Error("target container not found");

  const layoutCalc = calculateLayout.calculate(data);
  const dynamicEl = createDynamicElements.create(layoutCalc);

  render.init(dynamicEl.rowContainers, containerEl);
}
