# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order

from typing import List
from collections import Counter
from heapq import heappush, heappop

class Solution:
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