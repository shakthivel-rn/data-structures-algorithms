# Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution1:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
    
class Solution2:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        stack = []

        if root:
            stack.append((1, root))
        
        depth = 0
        while stack:
            currentDepth, node = stack.pop()

            if node:
                depth = max(depth, currentDepth)
                stack.append((currentDepth + 1, node.left))
                stack.append((currentDepth + 1, node.right))
        
        return depth