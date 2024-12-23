class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(indexA, indexB) {
    [this.heap[indexA], this.heap[indexB]] = [
      this.heap[indexB],
      this.heap[indexA],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let swapIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[swapIndex]
      ) {
        swapIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[swapIndex]
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex !== index) {
        this.swap(swapIndex, index);
        index = swapIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0] || null;
  }
}
