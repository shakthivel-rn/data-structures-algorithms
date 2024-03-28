# https://leetcode.com/problems/pacific-atlantic-water-flow/

class Solution(object):
    def pacificAtlantic(self, heights):
        ROWS, COLS = len(heights), len(heights[0])
        pacificReachable, atlanticReachable = set(), set()

        def dfs(row, col, reachable, prevHeight):
            if ((row, col) in reachable or 
                row < 0 or row == ROWS or 
                col < 0 or col == COLS or 
                heights[row][col] < prevHeight):
                return
            
            reachable.add((row, col))

            dfs(row - 1, col, reachable, heights[row][col])
            dfs(row + 1, col, reachable, heights[row][col])
            dfs(row, col - 1, reachable, heights[row][col])
            dfs(row, col + 1, reachable, heights[row][col])

        for col in range(COLS):
            dfs(0, col, pacificReachable, heights[0][col])
            dfs(ROWS - 1, col, atlanticReachable, heights[ROWS - 1][col])
        
        for row in range(ROWS):
            dfs(row, 0, pacificReachable, heights[row][0])
            dfs(row, COLS - 1, atlanticReachable, heights[row][COLS - 1])
        
        return list(pacificReachable.intersection(atlanticReachable))
        