class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([val, r, c]) {
        this.heap.push([val, r, c]);
        this.bubbleUp();
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];

            if (element[0] >= parent[0]) break;

            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.heap[leftIdx];
                if (left[0] < element[0]) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                right = this.heap[rightIdx];
                if (
                    (swap === null && right[0] < element[0]) ||
                    (swap !== null && right[0] < left[0])
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

function kthSmallest(matrix, k) {
    const n = matrix.length;

    // Create a min heap
    const minHeap = new MinHeap();

    // Initialize heap with the first element of each row
    for (let r = 0; r < Math.min(k, n); r++) {
        minHeap.push([matrix[r][0], r, 0]);
    }

    // Extract the smallest elements from the heap k times
    let element;
    while (k > 0) {
        const [val, r, c] = minHeap.pop();
        element = val;

        // If there are more elements in the current row, add the next element
        if (c + 1 < n) {
            minHeap.push([matrix[r][c + 1], r, c + 1]);
        }

        k--;
    }

    return element;
}

