const __calculateLayout = (input) => {
  if (input === null || input.length === 0) {
    return {
      rows: [],
    };
  }

  const result = [];
  let row = [];

  const dataLane = input.slice(0, 30);

  dataLane.forEach((obj) => {
    if (row.length === 6) {
      result.push(row);
      row = [];
    }
    row.push(obj);
  });

  if (row.length !== 0) result.push(row);

  return {
    rows: result,
  };
};

export default __calculateLayout;
