# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order

from typing import List
from collections import Counter
from heapq import heappush, heappop
import random


class Solution1:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        minHeap = []

        index = 0
        for num, count in counter.items():
            if index < k:
                heappush(minHeap, (count, num))
            else:
                if count > minHeap[0][0]:
                    heappop(minHeap)
                    heappush(minHeap, (count, num))
            index += 1

        return [item[1] for item in minHeap]


class Solution2:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        unique = list(counter.keys())

        def partition(left, right, partitionIndex):
            unique[right], unique[partitionIndex] = (
                unique[partitionIndex],
                unique[right],
            )
            storeIndex = left

            for index in range(left, right):
                if counter[unique[index]] < counter[unique[right]]:
                    unique[index], unique[storeIndex] = (
                        unique[storeIndex],
                        unique[index],
                    )
                    storeIndex += 1

            unique[storeIndex], unique[right] = unique[right], unique[storeIndex]
            return storeIndex

        def quickSelect(left, right, kSmallest):
            if left == right:
                return

            partitionIndex = random.randint(left, right)
            partitionIndex = partition(left, right, partitionIndex)

            if partitionIndex == kSmallest:
                return
            elif kSmallest < partitionIndex:
                quickSelect(left, partitionIndex - 1, kSmallest)
            else:
                quickSelect(partitionIndex + 1, right, kSmallest)

        n = len(unique)
        quickSelect(0, n - 1, n - k)

        return unique[n - k :]
