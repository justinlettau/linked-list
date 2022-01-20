import { Item } from './item';

describe('Item', () => {
  describe('constructor', () => {
    test('should set value', () => {
      const item = new Item('🦖');

      expect(item.value).toBe('🦖');
    });

    test('should default next/prev to null', () => {
      const item = new Item('🦖');

      expect(item.prev).toBeNull();
      expect(item.next).toBeNull();
    });
  });

  describe('prepend method', () => {
    test('set prev', () => {
      const item1 = new Item('🦖');
      const item2 = new Item('🥚');
      item1.prepend(item2);

      expect(item1.prev).toBe(item2);
      expect(item1.next).toBeNull();
    });
  });

  describe('append method', () => {
    test('set prev', () => {
      const item1 = new Item('🦖');
      const item2 = new Item('🪦');
      item1.append(item2);

      expect(item1.prev).toBeNull();
      expect(item1.next).toBe(item2);
    });
  });
});
