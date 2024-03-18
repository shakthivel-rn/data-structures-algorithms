# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

from collections import deque

class Solution1(object):
    def levelOrder(self, root):
        levels = []

        if not root:
            return levels

        def helper(node, level):
            if len(levels) == level:
                levels.append([])
            
            levels[level].append(node.val)

            if node.left:
                helper(node.left, level + 1)
            if node.right:
                helper(node.right, level + 1)
        
        helper(root, 0)
        return levels
    
class Solution(object):
    def levelOrder(self, root):
        levelOrder = []
        if not root:
            return levelOrder

        queue = deque([root])
        while queue:
            currentLevel = []

            for i in range(len(queue)):
                node = queue.popleft()
                currentLevel.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            levelOrder.append(currentLevel)
        
        return levelOrder