# https://leetcode.com/problems/graph-valid-tree/description/

class DSU1:
    def __init__(self, n):
        self.roots = range(n)
        self.count = n
    
    def find(self, x):
        if self.roots[x] == x:
            return x
        
        self.roots[x] = self.find(self.roots[x])
        return self.roots[x]
    
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX == rootY:
            return False

        self.roots[rootY] = rootX
        self.count -= 1
        return True

class Solution1(object):
    def validTree(self, n, edges):
        dsu = DSU(n)

        for edge1, edge2 in edges:
            if dsu.union(edge1, edge2) == False:
                return False
        
        return dsu.count == 1

class DSU2:
    def __init__(self, n):
        self.roots = range(n)
    
    def find(self, x):
        if self.roots[x] == x:
            return x
        
        self.roots[x] = self.find(self.roots[x])
        return self.roots[x]
    
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX == rootY:
            return False

        self.roots[rootY] = rootX
        return True

class Solution2(object):
    def validTree(self, n, edges):
        if len(edges) != n - 1:
            return False

        dsu = DSU(n)

        for edge1, edge2 in edges:
            if dsu.union(edge1, edge2) == False:
                return False
        
        return True
        
        
        
        