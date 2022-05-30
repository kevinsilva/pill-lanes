export const __createRow = () => {
  const row = document.createElement("div");
  row.classList.add("row");
  return row;
}

export const __createFrontAndBackRows = (data) => {
  let result = [];

  for (const [index] of data.rows.entries()) {
    const row = {};
    row.front = __createRow();
    row.front.classList.add(`row--${index + 1}-front`);
    row.back = __createRow();
    row.back.classList.add(`row--${index + 1}-back`);
    result.push(row);
  }

  return result;
}