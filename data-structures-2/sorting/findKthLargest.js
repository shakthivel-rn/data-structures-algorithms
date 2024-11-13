function findKthLargest(nums, k) {
  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.insert(num);

    if (minHeap.size() > k) {
      minHeap.removeMin();
    }
  }

  return minHeap.peek();
}

class MinHeap {
  constructor() {
    this.minHeap = [];
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
    [this.minHeap[index1], this.minHeap[index2]] = [
      this.minHeap[index2],
      this.minHeap[index1],
    ];
  }

  insert(value) {
    this.minHeap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.minHeap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.minHeap[index] < this.minHeap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMin() {
    if (this.minHeap.length === 0) return null;
    if (this.minHeap.length === 1) return this.minHeap.pop();

    const minValue = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    this.bubbleDown();
  }

  bubbleDown() {
    let index = 0;
    const length = this.minHeap.length;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.minHeap[leftChildIndex] < this.minHeap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.minHeap[rightChildIndex] < this.minHeap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.minHeap.length === 0 ? null : this.minHeap[0];
  }

  size() {
    return this.minHeap.length;
  }

  isEmpty() {
    return this.minHeap.length === 0;
  }
}

function findKthLargest(nums, k) {
  const n = nums.length;

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(nums, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];

    if (i === n - k) return nums[i];

    heapify(nums, i, 0);
  }

  return nums[0];
}

function heapify(nums, n, i) {
  let largest = i;
  const left = 2 * i + 1,
    right = 2 * i + 2;

  if (left < n && nums[left] > nums[largest]) largest = left;
  if (right < n && nums[right] > nums[largest]) largest = right;

  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    heapify(nums, n, largest);
  }
}
