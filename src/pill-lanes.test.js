import pillLanes from './pill-lanes.js';
import { makeDataCopies } from './utilities.js';

describe('Pill-Lanes', () => {
  describe('pill-lanes', () => {
    it('returns null when there are no data', () => {
      expect(pillLanes()).toEqual(null);
      expect(pillLanes([])).toEqual(null);
    });
    it('throws an error when the target container does not exist', () => {
      const result = pillLanes([{}]);
      expect(result).toEqual(new Error('target container not found'));
    });
    it('renders data objects into rows of pills', () => {
      pillLanes(makeDataCopies(30), document.body);
      const container = document.body.children[0];

      expect(container.classList).toContain('container');
      expect(container.children.length).toEqual(5);
      expect(container.children[0].classList).toContain('row-container');
    });
  });
});
