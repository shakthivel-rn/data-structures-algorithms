# https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

class TreeNode(object):
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

class Solution(object):
    def __init__(self):
        self.maxSum = float('-inf')

    def maxPathSum(self, root):
        self.maxPathSumHelper(root)
        return self.maxSum
    
    def maxPathSumHelper(self, node):
        if node == None:
            return 0

        left = max(self.maxPathSumHelper(node.left), 0)
        right = max(self.maxPathSumHelper(node.right), 0)
        self.maxSum = max(self.maxSum, left + right + node.val)

        return max(left, right) + node.val