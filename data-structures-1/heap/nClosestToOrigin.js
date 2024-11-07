class NClosestToOrigin {
  nClosest(points, k) {
    const maxHeap = new MaxHeap();

    for (let index = 0; index < points.length; index++) {
      maxHeap.insert(points[index]);

      if (index >= k) {
        maxHeap.removeMax();
      }
    }

    return maxHeap.heap;
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

  insert(point) {
    this.heap.push(point);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (
        this.getDistanceFromOrigin(this.heap[index]) >
        this.getDistanceFromOrigin(this.heap[parentIndex])
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax() {
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
        this.getDistanceFromOrigin(this.heap[leftChildIndex]) >
          this.getDistanceFromOrigin(this.heap[swapIndex])
      ) {
        swapIndex = index;
      }
      if (
        rightChildIndex < length &&
        this.getDistanceFromOrigin(this.heap[rightChildIndex]) >
          this.getDistanceFromOrigin(this.heap[swapIndex])
      ) {
        swapIndex = index;
      }

      if (swapIndex !== index) {
        this.swap(swapIndex, index);
        index = swapIndex;
      } else {
        break;
      }
    }
  }

  getDistanceFromOrigin(point) {
    const [x, y] = point;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}
