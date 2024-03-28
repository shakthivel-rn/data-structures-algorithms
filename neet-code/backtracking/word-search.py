# https://leetcode.com/problems/word-search/description/

class Solution(object):
    def exist(self, board, word):
        ROWS, COLS = len(board), len(board[0])

        def dfs(row, col, suffix):
            if len(suffix) == 0:
                return True
            
            if row < 0 or row >= ROWS or col < 0 or col >= COLS or board[row][col] != suffix[0]:
                return False
            
            board[row][col] = '#'

            for direction in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                newRow, newCol = row + direction[0], col + direction[1]

                if dfs(newRow, newCol, suffix[1:]):
                    return True
            
            board[row][col] = suffix[0]

            return False
        
        for row in range(ROWS):
            for col in range(COLS):
                if dfs(row, col, word):
                    return True
        
        return False
        