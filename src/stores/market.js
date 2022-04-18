import { observable, action, computed, makeObservable } from "mobx";

export default class MarketStore {
  selectedItems = [];

  constructor(root) {
    this.root = root;
    makeObservable(this, {
      selectedItems: observable,
      put: action,
      take: action,
      total: computed,
    });
  }

  put = (name, price) => {
    console.log(this.root.counter.number);
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  };

  take = (name) => {
    const itemToTake = this.selectedItems.find((item) => item.name === name);

    itemToTake.count--;

    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  get total() {
    console.log("총합 계산");

    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
