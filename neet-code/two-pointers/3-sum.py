# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.

from typing import List

class Solution1:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()

        for index in range(len(nums)):
            if nums[index] > 0:
                break
            
            if index == 0 or nums[index - 1] != nums[index]:
                self.threeSumHelper(nums, index, result)
        
        return result
    
    def threeSumHelper(self, nums: List[int], index: int, result: List[List[int]]):
        leftIndex, rightIndex = index + 1, len(nums) - 1

        while leftIndex < rightIndex:
            totalSum = nums[index] + nums[leftIndex] + nums[rightIndex]

            if totalSum < 0:
                leftIndex += 1
            elif totalSum > 0:
                rightIndex -= 1
            else:
                result.append([nums[index], nums[leftIndex], nums[rightIndex]])
                leftIndex += 1
                rightIndex -= 1

                while leftIndex < rightIndex and nums[leftIndex] == nums[leftIndex - 1]:
                    leftIndex += 1

class Solution2:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()

        for index in range(len(nums)):
            if nums[index] > 0:
                break
            
            if index == 0 or nums[index - 1] != nums[index]:
                self.threeSumHelper(nums, index, result)
        
        return result
    
    def threeSumHelper(self, nums: List[int], index: int, result: List[List[int]]):
        seen = set()
        tempIndex = index + 1

        while tempIndex < len(nums):
            complement = -nums[index] - nums[tempIndex]

            if complement in seen:
                result.append([nums[index], nums[tempIndex], complement])
                while tempIndex + 1 < len(nums) and nums[tempIndex] == nums[tempIndex + 1]:
                    tempIndex += 1
            seen.add(nums[tempIndex])
            tempIndex += 1
        
class Solution3:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result, duplicates = set(), set()

        for firstIndex, firstValue in enumerate(nums):
            if firstValue not in duplicates:
                duplicates.add(firstValue)
                seen = set()

                for secondIndex, secondValue in enumerate(nums[firstIndex + 1:]):
                    complement = -firstValue - secondValue

                    if complement in seen:
                        result.add(tuple(sorted((firstValue, secondValue, complement))))
                    seen.add(secondValue)
        
        return result

class Solution4:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result, duplicates = set(), set()
        seen = {}

        for firstIndex, firstValue in enumerate(nums):
            if firstValue not in duplicates:
                duplicates.add(firstValue)

                for secondIndex, secondValue in enumerate(nums[firstIndex + 1:]):
                    complement = -firstValue - secondValue

                    if complement in seen and seen[complement] == firstIndex:
                        result.add(tuple(sorted((firstValue, secondValue, complement))))
                    seen[secondValue] = firstIndex
        
        return result
        