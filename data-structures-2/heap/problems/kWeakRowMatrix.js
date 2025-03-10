// Linear Search
function kWeakRowMatrix(mat, k) {
  const maxHeap = new MaxHeap();

  for (let row = 0; row < mat.length; row++) {
    const rowScore = getRowScoreLinear(mat[row]);
    maxHeap.insert(row, rowScore);

    if (row >= k) {
      maxHeap.removeMax();
    }
  }

  const result = [];
  while (maxHeap.size()) {
    result.push(maxHeap.removeMax());
  }

  return result.reverse();
}

const getRowScoreLinear = (row) => row.reduce((acc, value) => acc + value, 0);

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

  insert(rowIndex, rowScore) {
    this.heap.push([rowIndex, rowScore]);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (
        this.heap[index][1] > this.heap[parentIndex][1] ||
        (this.heap[index][1] === this.heap[parentIndex][1] &&
          this.heap[index][0] > this.heap[parentIndex][0])
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()[0];

    const maxIndex = this.heap[0][0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxIndex;
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let largestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        (this.heap[leftChildIndex][1] > this.heap[largestIndex][1] ||
          (this.heap[leftChildIndex][1] === this.heap[largestIndex][1] &&
            this.heap[leftChildIndex][0] > this.heap[largestIndex][0]))
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        (this.heap[rightChildIndex][1] > this.heap[largestIndex][1] ||
          (this.heap[rightChildIndex][1] === this.heap[largestIndex][1] &&
            this.heap[rightChildIndex][0] > this.heap[largestIndex][0]))
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
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
}

// Binary Search
var kWeakestRows = function (mat, k) {
  const maxHeap = new MaxHeap();

  for (let row = 0; row < mat.length; row++) {
    const rowScore = getRowScoreBinarySearch(mat[row], 0, mat[row].length);
    maxHeap.insert(row, rowScore);

    if (row >= k) {
      maxHeap.removeMax();
    }
  }

  const result = [];
  while (maxHeap.size()) {
    result.push(maxHeap.removeMax());
  }

  return result.reverse();
};

const getRowScoreBinarySearch = (row, low, high) => {
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (row[mid] === 1) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

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

  insert(rowIndex, rowScore) {
    this.heap.push([rowIndex, rowScore]);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (
        this.heap[index][1] > this.heap[parentIndex][1] ||
        (this.heap[index][1] === this.heap[parentIndex][1] &&
          this.heap[index][0] > this.heap[parentIndex][0])
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()[0];

    const maxIndex = this.heap[0][0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxIndex;
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let largestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        (this.heap[leftChildIndex][1] > this.heap[largestIndex][1] ||
          (this.heap[leftChildIndex][1] === this.heap[largestIndex][1] &&
            this.heap[leftChildIndex][0] > this.heap[largestIndex][0]))
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        (this.heap[rightChildIndex][1] > this.heap[largestIndex][1] ||
          (this.heap[rightChildIndex][1] === this.heap[largestIndex][1] &&
            this.heap[rightChildIndex][0] > this.heap[largestIndex][0]))
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
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
}

// Vertical Approach
var kWeakestRows = function (mat, k) {
  const ROWS = mat.length,
    COLS = mat[0].length;
  const indexes = [];

  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      if (indexes.length === k) break;

      if (mat[row][col] === 0 && (col === 0 || mat[row][col - 1] === 1)) {
        indexes.push(row);
      }
    }
  }

  let index = 0;
  while (indexes.length < k) {
    if (mat[index].at(-1) === 1) {
      indexes.push(index);
    }
    index += 1;
  }

  return indexes;
};
