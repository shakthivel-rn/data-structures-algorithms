# Given the head of a singly linked list, reverse the list, and return the reversed list.

from typing import Optional

class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next

class Solution1:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prevNode, currentNode = None, head

        while currentNode:
            nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
        
        return prevNode
    
class Solution2:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        p = self.reverseList(head.next)
        head.next.next = head
        head.next = None

        return p
