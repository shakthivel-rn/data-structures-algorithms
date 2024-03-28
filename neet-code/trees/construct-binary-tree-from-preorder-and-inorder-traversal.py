from collections import deque

class TreeNode(object):
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

class Solution(object):
    def buildTree(self, preorder, inorder):
        preorder = deque(preorder)

        def helper(inLeft, inRight):
            if inLeft > inRight:
                return None
            
            value = preorder.popleft()
            root = TreeNode(value)

            index = indexMap[value]

            root.left = helper(inLeft, index - 1)
            root.right = helper(index + 1, inRight)

            return root
        
        indexMap = {value: index for index, value in enumerate(inorder)}

        return helper(0, len(inorder) - 1)