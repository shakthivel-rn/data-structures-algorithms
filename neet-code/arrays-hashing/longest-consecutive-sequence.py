# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.

nums = [0,3,7,2,5,8,4,6,0,1]
print(set(nums))

from typing import List

class Solution1:
    def longestConsecutive(self, nums: List[int]) -> int:
        longestStreak = 0

        for num in nums:
            currentNum = num
            currentStreak = 1

            while currentNum + 1 in nums:
                currentNum += 1
                currentStreak += 1
            
            longestStreak = max(longestStreak, currentStreak)
        
        return longestStreak

class Solution2:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        nums.sort()

        longestStreak = 1
        currentStreak = 1

        for index in range(1, len(nums)):
            if nums[index] != nums[index - 1]:
                if nums[index] == nums[index - 1] + 1:
                    currentStreak += 1
                else:
                    longestStreak = max(longestStreak, currentStreak)
                    currentStreak = 1
        
        return max(longestStreak, currentStreak)

class Solution3:
    def longestConsecutive(self, nums: List[int]) -> int:
        longestStreak = 0
        numSet = set(nums)

        for num in numSet:
            if num - 1 not in numSet:
                currentNum = num
                currentStreak = 1

                while currentNum + 1 in numSet:
                    currentNum += 1
                    currentStreak += 1
                
                longestStreak = max(longestStreak, currentStreak)
        
        return longestStreak