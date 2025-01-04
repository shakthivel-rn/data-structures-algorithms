function kFrequent(nums, k) {
  const freqMap = new Map();
  const minHeap = new MinHeap();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [num, count] of freqMap.entries()) {
    minHeap.insert([num, count]);

    if (minHeap.size() > k) {
      minHeap.removeMin();
    }
  }

  const result = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.removeMin());
  }

  return result;
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

      if (this.heap[index][1] < this.heap[parentIndex][1]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()[0];

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return minValue[0];
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== index) {
        this.swap(smallestIndex, index);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }
}
