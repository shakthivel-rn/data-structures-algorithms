class KthLargestInStream {
  constructor(k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;

    for (let index = 0; index < nums.length; index++) {
      this.minHeap.insert(nums[index]);

      if (index >= k) {
        this.minHeap.removeMin();
      }
    }
  }

  add(val) {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.removeMin();
    }

    return this.minHeap.top();
  }
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

      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMin() {
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return minValue;
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let swapIndex = index;
      const leftChildIndex = this.getLeftChildIndex(swapIndex);
      const rightChildIndex = this.getRightChildIndex(swapIndex);

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

      if (index !== swapIndex) {
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
