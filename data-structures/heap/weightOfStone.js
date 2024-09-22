class WeightOfStone {
  lastStoneWeight(stones) {
    const maxHeap = new MaxHeap();

    for (const stone of stones) {
      maxHeap.insert(stone);
    }

    while (maxHeap.size() > 1) {
      const bigStone = maxHeap.removeMax();
      const smallStone = maxHeap.removeMax();

      const newStone = bigStone - smallStone;

      if (newStone > 0) {
        maxHeap.insert(newStone);
      }
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.top();
  }
}

class MaxHeap {
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

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
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

      if (this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxValue;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let swapIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[swapIndex]
      ) {
        swapIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[swapIndex]
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

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
