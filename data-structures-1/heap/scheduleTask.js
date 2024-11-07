class ScheduleTask {
  leastInterval(tasks, n) {
    const taskCount = new Array(26).fill(0);
    for (const task of tasks) {
      taskCount[task.charCodeAt(0) - "A".charCodeAt(0)] += 1;
    }

    const maxHeap = new MaxHeap();
    for (const count of taskCount) {
      if (count > 0) maxHeap.insert(count);
    }

    let intervals = 0;
    const coolingQueue = [];

    while (maxHeap.size() > 0 || coolingQueue.length > 0) {
      intervals += 1;

      if (maxHeap.size() > 0) {
        let count = maxHeap.removeMax();
        count -= 1;

        if (count > 0) {
          coolingQueue.push([count, intervals + n]);
        }
      }

      if (coolingQueue.length > 0 && coolingQueue[0][1] === intervals) {
        const [count, _] = coolingQueue.shift();
        maxHeap.insert(count);
      }
    }

    return intervals;
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
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxValue;
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

  size() {
    return this.heap.length;
  }
}
