# You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed.

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if head is None or head.next is None:
            return head
        
        slowNode = fastNode = head
        while fastNode and fastNode.next:
            slowNode = slowNode.next
            fastNode = fastNode.next.next
        
        prevNode, currNode = None, slowNode
        while currNode:
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        
        firstNode, secondNode = head, prevNode
        while secondNode.next:
            firstNode.next, firstNode = secondNode, firstNode.next
            secondNode.next, secondNode = firstNode, secondNode.next
        

 