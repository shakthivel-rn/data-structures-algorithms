# https://leetcode.com/problems/clone-graph/
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution(object):
    def __init__(self):
        self.visited = {}

    def cloneGraph(self, node):
        if node == None:
            return None
        
        if node in self.visited:
            return self.visited[node]
        
        cloneNode = Node(node.val, [])
        self.visited[node] = cloneNode

        cloneNode.neighbors = [self.cloneGraph(n) for n in node.neighbors]
        
        return 
    
class Solution(object):
    def cloneGraph(self, node):
        if node == None:
            return None
        
        visited = {}
        queue = deque([node])
        visited[node] = Node(node.val, [])

        while queue:
            n = queue.popleft()

            for neighbor in n.neighbors:
                if neighbor not in visited:
                    visited[neighbor] = Node(neighbor.val, [])
                    queue.append(neighbor)
                visited[n].neighbors.append(visited[neighbor])
        
        return visited[node]
        

        