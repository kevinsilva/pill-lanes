import { createFrontAndBackRows } from "./createFrontAndBackRows.js";

export const createRowContainer = (function () {
  function _creation() {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    return rowContainer;
  }

  function create() {
    return _creation();
  }
  return {
    create: create,
  };
})();

export const createPill = (function () {
  function _creation(data) {
    const pill = document.createElement("a");
    pill.classList.add("pill");
    pill.href = data.link;
    pill.target = "_blank";

    //img
    const img = document.createElement("img");
    img.classList.add("pill__img");
    img.src = data.img;

    pill.appendChild(img);

    //text
    const text = document.createElement("p");
    text.classList.add("pill__text");
    text.textContent = data.label;

    pill.appendChild(text);

    return pill;
  }

  function create(data) {
    return _creation(data);
  }
  return {
    create: create,
  };
})();

export const createDynamicElements = (function () {
  function _creation(data) {
    const result = [];
    const frontAndBack = createFrontAndBackRows.create(data);

    for (const [index, entry] of data.rows.entries()) {
      const rowContainer = createRowContainer.create();
      const frontRow = frontAndBack[index].front;
      const backRow = frontAndBack[index].back;

      entry.forEach((dataObj) => {
        const pill = createPill.create(dataObj);
        const backPill = createPill.create(dataObj);

        frontRow.appendChild(pill);
        backRow.appendChild(backPill);
      });

      rowContainer.appendChild(frontRow);
      rowContainer.appendChild(backRow);
      result.push(rowContainer);
    }
    return {
      rowContainers: result,
    };
  }

  function create(data) {
    return _creation(data);
  }

  return {
    create: create,
  };
})();
