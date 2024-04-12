# https://leetcode.com/problems/counting-bits/

class Solution1(object):
    def countBits(self, n):
        res = []

        for value in range(n + 1):
            res.append(self.findCount(value))
        
        return res
    
    def findCount(self, n):
        res = 0
        
        while n:
            n &= (n - 1)
            res += 1
        
        return res

class Solution2(object):
    def countBits(self, n):
        dp = [0] * (n + 1)
        offset = 1

        for i in range(1, n + 1):
            if offset * 2 == i:
                offset = i
            
            dp[i] = 1 + dp[i - offset]
        
        return dp

class Solution3(object):
    def countBits(self, n):
        ans = [0] * (n + 1)

        for x in range(1, n + 1):
            ans[x] = ans[x >> 1] + (x & 1)
        
        return ans