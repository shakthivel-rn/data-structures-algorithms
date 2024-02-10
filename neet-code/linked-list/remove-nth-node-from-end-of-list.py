# Given the head of a linked list, remove the nth node from the end of the list and return its head.

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummyHead = ListNode(-1)
        dummyHead.next = head

        firstNode = secondNode = dummyHead

        for _ in range(n + 1):
            secondNode = secondNode.next
        
        while secondNode:
            firstNode = firstNode.next
            secondNode = secondNode.next
        
        firstNode.next = firstNode.next.next
        return dummyHead.next