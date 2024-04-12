# https://leetcode.com/problems/number-of-1-bits/description/

class Solution1(object):
    def hammingWeight(self, n):
        res = 0

        while n:
            res += n % 2
            n /= 2
        
        return res
        
class Solution2(object):
    def hammingWeight(self, n):
        res = 0

        while n:
            n &= (n - 1)
            res += 1
        
        return res
        