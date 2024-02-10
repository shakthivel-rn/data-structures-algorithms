# You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

from typing import Optional, List
from heapq import heappush, heappop

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        minHeap = []

        for root in lists:
            if root:
                heappush(minHeap, (root.val, root))
        
        resultHead, resultTail = None, None
        while minHeap:
            value, node = heappop(minHeap)

            if resultHead == None:
                resultHead = resultTail = node
            else:
                resultTail.next = node
                resultTail = resultTail.next
            
            if node.next:
                heappush(minHeap, (node.next.val, node.next))
        
        return resultHead

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        length = len(lists)
        interval = 1

        while interval < length:
            for index in range(0, length - interval, interval * 2):
                lists[index] = self.mergeTwoLists(lists[index], lists[index + interval])
            interval *= 2
        
        return lists[0] if length > 0 else None

    def mergeTwoLists(self, list1, list2):
        dummyHead = tempNode = ListNode(-1)

        while list1 and list2:
            if list1.val <= list2.val:
                tempNode.next = list1
                list1 = list1.next
            else:
                tempNode.next = list2
                list2 = list2.next
            tempNode = tempNode.next
        
        tempNode.next = list1 if list1 else list2
        return dummyHead.next