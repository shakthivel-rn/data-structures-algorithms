# https://leetcode.com/problems/missing-number/

class Solution1(object):
    def missingNumber(self, nums):
        numsSet = set(nums)

        for num in range(len(nums) + 1):
            if num not in numsSet:
                return num

class Solution2(object):
    def missingNumber(self, nums):
        missing = len(nums)

        for index, num in enumerate(nums):
            missing ^= index ^ num
        
        return missing

class Solution3(object):
    def missingNumber(self, nums):
        res = len(nums)

        for index in range(len(nums)):
            res += (index - nums[index])
        
        return res
        