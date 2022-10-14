import __calculateLayout from './calculateLayout.js';
import { __createDynamicElements } from './createDynamicElements.js';
import { __render } from './render.js';

function pillLanes(data, containerEl) {
  if (!data || data.length === 0) return null;
  if (!containerEl) return new Error('target container not found');

  const layoutCalc = __calculateLayout(data);
  const dynamicEl = __createDynamicElements(layoutCalc);

  __render(dynamicEl.rowContainers, containerEl);

  return null;
}

export default pillLanes;
