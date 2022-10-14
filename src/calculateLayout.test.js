import __calculateLayout from './calculateLayout.js';
import { makeDataCopies } from './utilities.js';

describe('calculate layout', () => {
  it('returns an object with empty row array', () => {
    const result = __calculateLayout([]);
    expect(result).toEqual({
      rows: [],
    });
  });

  it('organizes the data into rows of 6 elements each', () => {
    // ARRANGE
    const data = makeDataCopies(10);
    // ACT
    const result = __calculateLayout(data);
    // ASSERT
    expect(result).toEqual({
      rows: [
        [data[0], data[1], data[2], data[3], data[4], data[5]],
        [data[6], data[7], data[8], data[9]],
      ],
    });
  });
  it('organizes maximum of 5 rows with 6 elements each. More is ignored', () => {
    const data = makeDataCopies(50);
    const result = __calculateLayout(data);

    expect(result.rows.length).toBe(5);
    result.rows.forEach((row) => expect(row.length).toBe(6));
  });
});
