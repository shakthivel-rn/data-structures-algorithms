# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.
from typing import List

class Solution1:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        leftSum, rightSum, productArray = [1] * length, [1] * length, [1] * length

        for index in range(1, length):
            leftSum[index] = leftSum[index - 1] * nums[index - 1]
        
        for index in reversed(range(length - 1)):
            rightSum[index] = rightSum[index + 1] * nums[index + 1]
        
        for index in range(length):
            productArray[index] = leftSum[index] * rightSum[index]
        
        return productArray
    
class Solution2:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        answer = [1] * length

        for index in range(1, length):
            answer[index] = answer[index - 1] * nums[index - 1]
        
        rightSum = 1
        for index in reversed(range(length)):
            answer[index] = answer[index] * rightSum
            rightSum *= nums[index]
        
        return answer
        