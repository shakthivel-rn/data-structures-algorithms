# Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key.The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.

class Solution1(object):
    def isValidBST(self, root):
        def validate(node, low = -float('inf'), high = float('inf')):
            if not node:
                return True
            
            if node.val <= low or node.val >= high:
                return False

            return (validate(node.left, low, node.val) and validate(node.right, node.val, high))
        
        return validate(root)

class Solution2(object):
    def isValidBST(self, root):
        if not root:
            return True
        
        stack = [(root, -float('inf'), float('inf'))]
        while stack:
            root, low, high = stack.pop()

            if not root:
                continue

            val = root.val
            if val <= low or val >= high:
                return False
            
            stack.append((root.left, low, val))
            stack.append((root.right, val, high))
        
        return True