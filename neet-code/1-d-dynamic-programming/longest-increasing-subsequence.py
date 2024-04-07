# https://leetcode.com/problems/longest-increasing-subsequence/description/

class Solution1(object):
    def lengthOfLIS(self, nums):
        nums = [float('-inf')] + nums
        memoize = {}

        def helper(nums, start):
            if start in memoize:
                return memoize[start]
            
            maxLen = 0
            for nextIndex in range(start + 1, len(nums)):
                if nums[start] < nums[nextIndex]:
                    maxLen = max(maxLen, 1 + helper(nums, nextIndex))
            
            memoize[start] = maxLen
            return maxLen
        
        return helper(nums, 0)
    
class Solution2(object):
    def lengthOfLIS(self, nums):
        LIS = [1] * len(nums)

        for i in range(len(nums) - 1, -1, -1):
            for j in range(i + 1, len(nums)):
                if nums[i] < nums[j]:
                    LIS[i] = max(LIS[i], 1 + LIS[j])
        
        return max(LIS)

class Solution3(object):
    def lengthOfLIS(self, nums):
        sub = [nums[0]]

        for num in nums[1:]:
            if num > sub[-1]:
                sub.append(num)
            else:
                index = 0
                while sub[index] < num:
                    index += 1
                sub[index] = num
        
        return len(sub)

class Solution4(object):
    def lengthOfLIS(self, nums):
        sub = []

        for num in nums:
            index = bisect_left(sub, num)

            if index == len(sub):
                sub.append(num)
            else:
                sub[index] = num
        
        return len(sub)
        
        