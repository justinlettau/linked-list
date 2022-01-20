// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Item<T = any> {
  constructor(value: T) {
    this.value = value;
  }

  value: T;
  private _prev: Item | null = null;
  private _next: Item | null = null;

  get prev() {
    return this._prev;
  }

  get next() {
    return this._next;
  }

  prepend(item: Item) {
    this._prev = item;
    item._next = this;
  }

  append(item: Item) {
    this._next = item;
    item._prev = this;
  }
}
