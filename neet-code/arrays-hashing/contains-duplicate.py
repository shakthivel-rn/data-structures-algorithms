# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

from typing import List

class Solution1:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()

        for index in range(1, len(nums)):
            if nums[index] == nums[index - 1]:
                return True
        
        return False
    
class Solution2:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        