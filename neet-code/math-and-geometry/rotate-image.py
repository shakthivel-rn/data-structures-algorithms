# https://leetcode.com/problems/rotate-image/

class Solution(object):
    def rotate(self, matrix):
        left, right = 0, len(matrix) - 1

        while left < right:
            for index in range(right - left):
                top, bottom = left, right

                topLeft = matrix[top][left + index]
                matrix[top][left + index] = matrix[bottom - index][left]
                matrix[bottom - index][left] = matrix[bottom][right - index]
                matrix[bottom][right - index] = matrix[top + index][right]
                matrix[top + index][right] = topLeft

            left += 1
            right -= 1

        return matrix 
        