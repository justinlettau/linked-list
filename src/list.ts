import { Item } from './item.js';

export class List {
  constructor(...items: Item[]) {
    if (items && items.length > 0) {
      items.forEach((item) => this.append(item));
    }
  }

  private _head: Item | null = null;
  private _tail: Item | null = null;
  private _size = 0;

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  get size() {
    return this._size;
  }

  prepend(item: Item) {
    this._head?.prepend(item);

    if (!this.tail) {
      this._tail = this._head;
    }
    this._head = item;
    this._size++;
  }

  append(item: Item) {
    this._tail?.append(item);

    if (!this.head) {
      this._head = this._tail;
    }

    this._tail = item;
    this._size++;
  }
}
