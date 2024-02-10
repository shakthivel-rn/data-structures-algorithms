# Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.

from typing import Optional

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution1:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        seenNodes = set()
        currentNode = head

        while currentNode:
            if currentNode in seenNodes:
                return True
            seenNodes.add(currentNode)
            currentNode = currentNode.next
        
        return False

class Solution2:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return False
        
        slow, fast = head, head.next
        while slow != fast:
            if fast == None or fast.next == None:
                return False
            slow = slow.next
            fast = fast.next.next
        
        return True