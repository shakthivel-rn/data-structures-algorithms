# https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

class DSU:
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

        if rootX != rootY:
            self.roots[rootY] = rootX
            self.count -= 1

class Solution(object):
    def countComponents(self, n, edges):
        dsu = DSU(n)

        for edge1, edge2 in edges:
            dsu.union(edge1, edge2)
        
        return dsu.count
        
        