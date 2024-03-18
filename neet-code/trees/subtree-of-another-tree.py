# Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise. A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

class Solution(object):
    def isSubtree(self, root, subRoot):
        self.ans = False
        self.preOrder(root, subRoot)

        return self.ans
    
    def preOrder(self, root, subRoot):
        self.ans = self.ans or self.matchTrees(root, subRoot)

        if root.left:
            self.preOrder(root.left, subRoot)
        
        if root.right:
            self.preOrder(root.right, subRoot)
    
    def matchTrees(self, root, subRoot):
        if root == None and subRoot == None:
            return True
        
        if root == None or subRoot == None:
            return False

        if root.val != subRoot.val:
            return False
        
        return self.matchTrees(root.left, subRoot.left) and self.matchTrees(root.right, subRoot.right)