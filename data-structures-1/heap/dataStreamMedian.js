// const { MinHeap, MaxHeap } = require('@datastructures-js/heap');

class DataStreamMedian {
  constructor() {
    this.small = new MaxHeap();
    this.large = new MinHeap();
  }

  addNum(num) {
    this.small.insert(num);
    this.large.insert(this.small.extractRoot());

    if (this.small.size() < this.large.size()) {
      this.small.insert(this.large.extractRoot());
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.root();
    } else {
      return (this.small.root() + this.large.root()) / 2;
    }
  }
}
