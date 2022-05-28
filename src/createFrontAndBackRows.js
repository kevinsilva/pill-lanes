export const createRow = (function () {
  function _creation() {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
  }

  function create() {
    return _creation();
  }
  return {
    create: create,
  };
})();

export const createFrontAndBackRows = (function () {
  function _creation(data) {
    let result = [];

    for (const [index] of data.rows.entries()) {
      const row = {};
      row.front = createRow.create();
      row.front.classList.add(`row--${index + 1}-front`);
      row.back = createRow.create();
      row.back.classList.add(`row--${index + 1}-back`);
      result.push(row);
    }

    return result;
  }

  function create(data) {
    return _creation(data);
  }

  return {
    create: create,
  };
})();
