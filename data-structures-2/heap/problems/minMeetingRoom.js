function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinHeap();

  for (const interval of intervals) {
    if (minHeap.isEmpty() || interval[0] < minHeap.peek()) {
      minHeap.insert(interval[1]);
    } else {
      minHeap.removeMin();
      minHeap.insert(interval[1]);
    }
  }

  return minHeap.size();
}

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

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return minValue;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (index !== smallestIndex) {
        this.swap(index, smallestIndex);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }
}
