# https://leetcode.com/problems/number-of-islands/

class Solution(object):
    def numIslands(self, grid):
        if grid == None or len(grid) == 0:
            return 0
        
        rows = len(grid)
        cols = len(grid[0])
        islandCount = 0

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == '1':
                    islandCount += 1
                    self.dfs(grid, row, col)
        
        return islandCount
    
    def dfs(self, grid, row, col):
        rows = len(grid)
        cols = len(grid[0])

        if row >= 0 and row < rows and col >= 0 and col < cols and grid[row][col] == '1':
            grid[row][col] = '0'

            self.dfs(grid, row - 1, col)
            self.dfs(grid, row + 1, col)
            self.dfs(grid, row, col - 1)
            self.dfs(grid, row, col + 1)

        