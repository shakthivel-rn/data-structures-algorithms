# https://leetcode.com/problems/house-robber-ii/

class Solution(object):
    def rob(self, nums):
        if nums == None or len(nums) == 0:
            return 0
        
        if len(nums) == 1:
            return nums[0]
        
        return max(self.robSimple(nums[:-1]), self.robSimple(nums[1:]))
        
    def robSimple(self, nums):
        robber1, robber2 = 0, 0

        for currentHouse in nums:
            robber1, robber2 = max(currentHouse + robber2, robber1), robber1
        
        return robber1
        