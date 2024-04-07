# https://leetcode.com/problems/maximum-subarray/description/

class Solution(object):
    def maxSubArray(self, nums):
        maxSubArray = float("-inf")

        for i in range(len(nums)):
            currentSubArray = 0

            for j in range(i, len(nums)):
                currentSubArray += nums[j]
                maxSubArray = max(maxSubArray, currentSubArray)
        
        return maxSubArray
        
class Solution(object):
    def maxSubArray(self, nums):
        currentSubArray = maxSubArray = nums[0]

        for num in nums[1:]:
            currentSubArray = max(num, num + currentSubArray)
            maxSubArray = max(maxSubArray, currentSubArray)
        
        return maxSubArray
        