# Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

class Solution1(object):
    def lowestCommonAncestor(self, root, p, q):
        parentVal = root.val
        pVal = p.val
        qVal = q.val

        if pVal > parentVal and qVal > parentVal:
            return self.lowestCommonAncestor(root.right, p, q)
        elif pVal < parentVal and qVal < parentVal:
            return self.lowestCommonAncestor(root.left, p, q)
        else:
            return root

class Solution2(object):
    def lowestCommonAncestor(self, root, p, q):
        pVal = p.val
        qVal = q.val

        node = root
        while node:
            parentVal = node.val

            if pVal > parentVal and qVal > parentVal:
                node = node.right
            elif pVal < parentVal and qVal < parentVal:
                node = node.left
            else:
                return node