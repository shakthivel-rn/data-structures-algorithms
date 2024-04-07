# https://leetcode.com/problems/jump-game/description/

class Solution1(object):
    def canJump(self, nums):
        return self.canJumpFromPosition(0, nums)
    
    def canJumpFromPosition(self, position, nums):
        if position == len(nums) - 1:
            return True
        
        furthestJump = min(position + nums[position], len(nums) - 1)
        for nextPosition in range(position + 1, furthestJump + 1):
            if self.canJumpFromPosition(nextPosition, nums):
                return True
        
        return False

class Solution2(object):
    def canJump(self, nums):
        return self.canJumpFromPosition(0, nums)
    
    def canJumpFromPosition(self, position, nums):
        if position == len(nums) - 1:
            return True
        
        furthestJump = min(position + nums[position], len(nums) - 1)
        for nextPosition in range(furthestJump, position, -1):
            if self.canJumpFromPosition(nextPosition, nums):
                return True
        
        return False
    
class Solution3(object):
    def __init__(self):
        self.UNKNOWN = 0
        self.BAD = 1
        self.GOOD = 2

    def canJump(self, nums):
        self.memo = [self.UNKNOWN] * len(nums)
        self.memo[-1] = self.GOOD

        return self.canJumpFromPosition(0, nums)
    
    def canJumpFromPosition(self, position, nums):
        if self.memo[position] != self.UNKNOWN:
            return True if self.memo[position] == self.GOOD else False
        
        furthestJump = min(position + nums[position], len(nums) - 1)
        for nextPosition in range(furthestJump, position, -1):
            if self.canJumpFromPosition(nextPosition, nums):
                self.memo[position] = self.GOOD
                return True
        
        self.memo[position] = self.BAD
        return False
    
class Solution4(object):
    def __init__(self):
        self.UNKNOWN = 0
        self.BAD = 1
        self.GOOD = 2

    def canJump(self, nums):
        memo = [self.UNKNOWN] * len(nums)
        memo[-1] = self.GOOD

        for i in range(len(nums) - 2, -1, -1):
            furthestJump = min(i + nums[i], len(nums) - 1)

            for j in range(i + 1, furthestJump + 1):
                if memo[j] == self.GOOD:
                    memo[i] = self.GOOD
                    break
        
        return memo[0] == self.GOOD
        
class Solution5(object):
    def canJump(self, nums):
        lastPos = len(nums) - 1

        for index in range(len(nums) - 1, -1, -1):
            if index + nums[index] >= lastPos:
                lastPos = index
        
        return lastPos == 0
        