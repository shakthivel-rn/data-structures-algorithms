# https://leetcode.com/problems/climbing-stairs/

# Top Down Approach

class Solution1(object):
    def __init__(self):
        self.memo = {}

    def climbStairs(self, n):
        return self.climbStairsHelper(0, n)
    
    def climbStairsHelper(self, step, n):
        if step > n:
            return 0
        
        if step == n:
            return 1
        
        if step in self.memo:
            return self.memo[step]
        
        self.memo[step] = self.climbStairsHelper(step + 1, n) + self.climbStairsHelper(step + 2, n)
        return self.memo[step]
    
# Bottom Up Approach
    
class Solution2(object):
    def climbStairs(self, n):
        if n == 1:
            return 1

        dp = [0] * (n + 1)
        dp[-1], dp[-2] = 1, 1

        for i in reversed(range(n - 1)):
            dp[i] = dp[i + 1] + dp[i + 2]
        
        return dp[0]
    
class Solution(object):
    def climbStairs(self, n):
        one, two = 1, 1

        for i in range(n - 1):
            one, two = one + two, one
        
        return one
        

        
        