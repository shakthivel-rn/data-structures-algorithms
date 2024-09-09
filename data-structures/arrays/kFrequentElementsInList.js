// 1 - Bucket Sort
function kFrequent(nums, k) {
    const count = {}
    const freq = Array.from({ length: nums.length + 1 }, () => [])

    for (const num of nums) {
        count[num] ??= 0
        count[num] += 1
    }
    for (const num in count) {
        freq[count[num]].push(parseInt(num))
    }

    const result = []
    for (let index = freq.length - 1; index > 0; index--) {
        for (const num of freq[index]) {
            result.push(num)

            if (result.length === k) {
                return result
            }
        }
    }
}

// 2 - Min Heap
const kFrequent = function (nums, k) {
    const freqMap = new Map()
    const minHeap = new MinHeap()

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    for (const [num, count] of freqMap.entries()) {
        minHeap.insert([num, count])

        if (minHeap.size() > k) {
            minHeap.removeMin()
        }
    }

    const result = []
    while (minHeap.size() > 0) {
        result.push(minHeap.removeMin())
    }

    return result
};

class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return 2 * index + 1
    }

    getRightChildIndex(index) {
        return 2 * index + 2
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1

        while (index > 0) {
            const parentIndex = this.getParentIndex(index)

            if (this.heap[index][1] < this.heap[parentIndex][1]) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }

    removeMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()[0]

        const minValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return minValue[0]
    }

    bubbleDown() {
        let index = 0
        const length = this.heap.length

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let smallestIndex = index

            if (leftChildIndex < length && this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]) {
                smallestIndex = leftChildIndex
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]) {
                smallestIndex = rightChildIndex
            }

            if (smallestIndex !== index) {
                this.swap(smallestIndex, index)
                index = smallestIndex
            } else {
                break
            }
        }
    }

    size() {
        return this.heap.length
    }
}

// 3 - Quick Select
const kFrequent = function (nums, k) {
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    const freqArray = Array.from(freqMap.entries())
    const kMostFrequent = quickSelect(freqArray, 0, freqArray.length - 1, k)

    return kMostFrequent.map(v => v[0])
};

const quickSelect = (arr, left, right, k) => {
    if (left === right) return arr.slice(0, k)

    const pivotIndex = partition(arr, left, right)
    const count = pivotIndex + 1

    if (count === k) {
        return arr.slice(0, k)
    } else if (k < count) {
        return quickSelect(arr, left, pivotIndex - 1, k)
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k)
    }
}

const partition = (arr, left, right) => {
    const pivot = arr[right][1]
    let storeIndex = left

    for (let index = storeIndex; index < right; index++) {
        if (arr[index][1] >= pivot) {
            [arr[storeIndex], arr[index]] = [arr[index], arr[storeIndex]]
            storeIndex += 1
        }
    }

    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]]
    return storeIndex
}