import { makeDataCopies } from './utilities.js';
import __calculateLayout from './calculateLayout.js';
import { __createRow, __createFrontAndBackRows } from './createFrontAndBackRows.js';

describe('create front and back rows', () => {
  describe('create row', () => {
    describe('returns a row', () => {
      const result = __createRow();
      expect(result.classList).toContain('row');
    });
  });
  it('returns a front and back row for each number of rows', () => {
    const data1 = __calculateLayout(makeDataCopies(10));
    const data2 = __calculateLayout(makeDataCopies(50));

    const test1 = __createFrontAndBackRows(data1);
    const test2 = __createFrontAndBackRows(data2);

    expect(test1.length).toBe(2);
    expect(test2.length).toBe(5);
    expect(test1[0].front.className).toBe('row row--1-front');
    expect(test1[0].back.className).toBe('row row--1-back');
    expect(test2[1].front.className).toBe('row row--2-front');
    expect(test2[1].back.className).toBe('row row--2-back');
    expect(test2[4].front.className).toBe('row row--5-front');
    expect(test2[4].back.className).toBe('row row--5-back');
  });
});
