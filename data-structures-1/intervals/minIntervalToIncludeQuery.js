class MinIntervalToIncludeQuery {
  minInterval(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const minHeap = new MinHeap((v) => v[0]);
    const result = {};
    let index = 0;

    const sortedQueries = [...queries].sort((a, b) => a - b);

    for (const q of sortedQueries) {
      while (index < intervals.length && q >= intervals[index][0]) {
        const [left, right] = intervals[index];
        minHeap.insert([right - left + 1, right]);
        index += 1;
      }

      while (!minHeap.isEmpty() && q > minHeap.peek()[1]) {
        minHeap.removeMin();
      }

      result[q] = !minHeap.isEmpty() ? minHeap.peek()[0] : -1;
    }

    return queries.map((q) => result[q]);
  }
}

class MinHeap {
  constructor(compareFn) {
    this.compareFn = compareFn;
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

      if (
        this.compareFn(this.heap[index]) <
        this.compareFn(this.heap[parentIndex])
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return minValue;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let swapIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < length &&
        this.compareFn(this.heap[leftChildIndex]) <
          this.compareFn(this.heap[swapIndex])
      ) {
        swapIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.compareFn(this.heap[rightChildIndex]) <
          this.compareFn(this.heap[swapIndex])
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
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}
