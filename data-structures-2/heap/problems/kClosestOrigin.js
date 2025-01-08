function kClosestOrigin(points, k) {
  const maxHeap = new MaxHeap();

  for (let index = 0; index < points.length; index++) {
    const point = points[index];
    const distance = getDistance(point);

    if (index < k) {
      maxHeap.insert([point, distance]);
    } else {
      if (distance < maxHeap.peek()[1]) {
        maxHeap.removeMax();
        maxHeap.insert([point, distance]);
      }
    }
  }

  const result = [];
  while (maxHeap.size()) {
    result.push(maxHeap.removeMax());
  }

  return result;
}

const getDistance = ([a, b]) => a * a + b * b;

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

  removeMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()[0];

    const maxValue = this.heap[0][0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxValue;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[index][1] > this.heap[parentIndex][1]) {
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
      let largestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] > this.heap[largestIndex][1]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] > this.heap[largestIndex][1]
      ) {
        largestIndex = rightChildIndex;
      }

      if (index !== largestIndex) {
        this.swap(index, largestIndex);
        index = largestIndex;
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
