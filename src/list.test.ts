import { Item } from './item';
import { List } from './list';

describe('List', () => {
  describe('constructor', () => {
    test('should default next/prev to null', () => {
      const list = new List();

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    test('should default size to 0', () => {
      const list = new List();

      expect(list.size).toBe(0);
    });

    test('should add items', () => {
      const item1 = new Item('🥚');
      const item2 = new Item('🦖');
      const item3 = new Item('🪦');
      const list = new List(item1, item2, item3);

      expect(list.head).toBe(item1);
      expect(list.tail).toBe(item3);
      expect(list.size).toBe(3);
    });
  });

  describe('prepend method', () => {
    test('should set head', () => {
      const list = new List();
      const item = new Item('🦖');
      list.prepend(item);

      expect(list.head).toBe(item);
      expect(list.tail).toBeNull();
      expect(list.size).toBe(1);
    });
  });

  describe('append method', () => {
    test('should set tail', () => {
      const list = new List();
      const item = new Item('🦖');
      list.append(item);

      expect(list.head).toBeNull();
      expect(list.tail).toBe(item);
      expect(list.size).toBe(1);
    });
  });
});
