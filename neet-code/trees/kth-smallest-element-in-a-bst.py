# Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

class Solution1(object):
    def kthSmallest(self, root, k):
        def inorder(r):
            return inorder(r.left) + [r.val] + inorder(r.right) if r else []
        
        return inorder(root)[k - 1]
    
class Solution2(object):
    def kthSmallest(self, root, k):
        stack = []

        while True:
            while root:
                stack.append(root)
                root = root.left
            
            root = stack.pop()
            k -= 1
            if not k:
                return root.val
            
            root = root.right

class Solution3(object):
    def kthSmallest(self, root, k):
        currNode = root
        smallestCounter = 0

        while currNode:
            if currNode.left == None:
                smallestCounter += 1
                if smallestCounter == k:
                    return currNode.val
                currNode = currNode.right
            else:
                inorderPredecessor = self.getInorderPredecessor(currNode)
                inorderPredecessor.right = currNode
                tempNode = currNode
                currNode = currNode.left
                tempNode.left = None
        
        return -1
    
    def getInorderPredecessor(self, node):
        inorderPredecessor = node.left

        while inorderPredecessor.right:
            inorderPredecessor = inorderPredecessor.right
        
        return inorderPredecessor