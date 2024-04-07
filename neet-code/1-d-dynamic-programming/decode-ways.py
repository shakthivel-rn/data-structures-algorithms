# https://leetcode.com/problems/decode-ways/

class Solution(object):
    def numDecodings(self, s):
        dp = {len(s): 1}

        def dfs(index):
            if index in dp:
                return dp[index]
            if s[index] == "0":
                return 0
            
            result = dfs(index + 1)
            if (index + 1 < len(s) and int(s[index:index+2]) <= 26):
                result += dfs(index + 2)
            dp[index] = result

            return result
        
        return dfs(0)
        