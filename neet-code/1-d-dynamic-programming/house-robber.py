# https://leetcode.com/problems/house-robber/

class Solution1(object):
    def __init__(self):
        self.memo = {}

    def rob(self, nums):
        return self.robFrom(0, nums)
    
    def robFrom(self, i, nums):
        if i >= len(nums):
            return 0
        
        if i in self.memo:
            return self.memo[i]
        
        ans = max(self.robFrom(i + 1, nums), nums[i] + self.robFrom(i + 2, nums))
        self.memo[i] = ans

        return ans
    
class Solution2(object):
    def rob(self, nums):
        if nums == None:
            return 0

        maxRobbed = [None] * (len(nums) + 1)
        N = len(nums)

        maxRobbed[N], maxRobbed[N - 1] = 0, nums[N - 1]

        for index in range(N - 2, -1, -1):
            maxRobbed[index] = max(maxRobbed[index + 1], nums[index] + maxRobbed[index + 2])
        
        return maxRobbed[0]
    
class Solution3(object):
    def rob(self, nums):
        if nums == None:
            return 0
        
        N = len(nums)

        robNextPlusOne = 0
        robNext = nums[N - 1]

        for index in range(N - 2, -1, -1):
            current = max(robNext, nums[index] + robNextPlusOne)

            robNextPlusOne = robNext
            robNext = current
        
        return robNext
        

        
        