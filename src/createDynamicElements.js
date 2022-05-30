import { __createFrontAndBackRows } from "./createFrontAndBackRows.js";

export const __createRowContainer = () => {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");
  return rowContainer;
}

export const __createPill = (data) => {
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

export const __createDynamicElements = (data) => {
  const result = [];
  const frontAndBack = __createFrontAndBackRows(data);

  for (const [index, entry] of data.rows.entries()) {
    const rowContainer = __createRowContainer();
    const frontRow = frontAndBack[index].front;
    const backRow = frontAndBack[index].back;

    entry.forEach((dataObj) => {
      const pill = __createPill(dataObj);
      const backPill = __createPill(dataObj);

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