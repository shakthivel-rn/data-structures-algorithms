class MergingNSortedList {
    mergeNLists(lists) {
        const minHeap = new MinHeap()

        for (const list of lists) {
            if (list) minHeap.insert(list)
        }

        const dummy = new ListNode(-1)
        let current = dummy

        while (!minHeap.isEmpty()) {
            const small = minHeap.removeMin()
            current.next = small
            current = current.next

            if (small.next) {
                minHeap.insert(small.next)
            }
        }

        return dummy.next
    }
}

class MinHeap {
    constructor() {
        this.minHeap = []
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
        [this.minHeap[index1], this.minHeap[index2]] = [this.minHeap[index2], this.minHeap[index1]]
    }

    insert(value) {
        this.minHeap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.minHeap.length - 1

        while (index > 0) {
            const parentIndex = this.getParentIndex(index)

            if (this.minHeap[parentIndex].val > this.minHeap[index].val) {
                this.swap(parentIndex, index)
                index = parentIndex
            } else {
                break
            }
        }
    }

    removeMin() {
        if (this.minHeap.length === 0) return null

        if (this.minHeap.length === 1) return this.minHeap.pop()

        const minValue = this.minHeap[0]
        this.minHeap[0] = this.minHeap.pop()
        this.bubbleDown()

        return minValue
    }

    bubbleDown() {
        let index = 0
        const LENGTH = this.minHeap.length

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let smallestIndex = index

            if (leftChildIndex < LENGTH && this.minHeap[leftChildIndex].val < this.minHeap[smallestIndex].val) {
                smallestIndex = leftChildIndex
            }
            if (rightChildIndex < LENGTH && this.minHeap[rightChildIndex].val < this.minHeap[smallestIndex].val) {
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

    isEmpty() {
        return this.minHeap.length === 0
    }
}

class MergingNSortedList {
    mergeNLists(lists) {
        const LENGTH = lists.length
        let interval = 1

        while (interval < LENGTH) {
            for (let index = 0; index < LENGTH; index += interval * 2) {
                lists[index] = this.mergeLists(lists[index], lists[index + interval])
            }
            interval *= 2
        }

        return LENGTH > 0 ? lists[0] : null
    }

    mergeLists(list1, list2) {
        const dummy = new ListNode(-1)
        let current = dummy

        while (list1 && list2) {
            if (list1.val < list2.val) {
                current.next = list1
                list1 = list1.next
            } else {
                current.next = list2
                list2 = list2.next
            }
            current = current.next
        }

        current.next = list1 ? list1 : list2
        return dummy.next
    }
}
