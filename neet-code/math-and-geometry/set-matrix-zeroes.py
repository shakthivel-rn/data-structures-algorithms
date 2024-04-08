# https://leetcode.com/problems/set-matrix-zeroes/

class Solution1(object):
    def setZeroes(self, matrix):
        ROWS, COLS = len(matrix), len(matrix[0])
        rows, cols = set(), set()

        for row in range(ROWS):
            for col in range(COLS):
                if matrix[row][col] == 0:
                    rows.add(row)
                    cols.add(col)
        
        for row in range(ROWS):
            for col in range(COLS):
                if row in rows or col in cols:
                    matrix[row][col] = 0
        
        return matrix
        

class Solution2(object):
    def setZeroes(self, matrix):
        ROWS, COLS = len(matrix), len(matrix[0])
        rowZero = False

        for row in range(ROWS):
            for col in range(COLS):
                if matrix[row][col] == 0:
                    matrix[0][col] = 0

                    if row > 0:
                        matrix[row][0] = 0
                    else:
                        rowZero = True
        
        for row in range(1, ROWS):
            for col in range(1, COLS):
                if matrix[0][col] == 0 or matrix[row][0] == 0:
                    matrix[row][col] = 0
            
        if matrix[0][0] == 0:
            for row in range(ROWS):
                matrix[row][0] = 0
        
        if rowZero:
            for col in range(COLS):
                matrix[0][col] = 0
        
        return matrix
        

        