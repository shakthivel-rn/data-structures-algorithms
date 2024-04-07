# https://leetcode.com/problems/maximum-product-subarray/submissions/1220028634/

class Solution1(object):
    def maxProduct(self, nums):
        result = max(nums)
        currentMin, currentMax = 1, 1

        for num in nums:
            if num == 0:
                currentMin, currentMax = 1, 1
                continue
            
            currentMax, currentMin = max(num, num * currentMax, num * currentMin), min(num, num * currentMax, num * currentMin)
            result = max(result, currentMax)
        
        return result
    
class Solution2(object):
    def maxProduct(self, nums):
        result = max(nums)
        currentMin, currentMax = 1, 1

        for num in nums:
            if num == 0:
                currentMin, currentMax = 1, 1
                continue
            
            tempMax = max(num, num * currentMax, num * currentMin)
            currentMin = min(num, num * currentMax, num * currentMin)
            currentMax = tempMax
            
            result = max(result, currentMax)
        
        return result