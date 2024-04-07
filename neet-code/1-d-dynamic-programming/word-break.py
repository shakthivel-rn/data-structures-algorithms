# https://leetcode.com/problems/word-break/

class Solution1(object):
    def wordBreak(self, s, wordDict):
        memoize = {}

        def helper(s, wordSet, start):
            if start == len(s):
                return True
            
            if start in memoize:
                return memoize[start]
            
            for word in wordSet:
                if (start+len(word) <= len(s)) and s[start:start+len(word)] == word:
                    memoize[start] = helper(s, wordSet, start+len(word))
                    if memoize[start] == True:
                        return True
            
            memoize[start] = False
            return False
        
        return helper(s, set(wordDict), 0)
    
class Solution2(object):
    def wordBreak(self, s, wordDict):
        dp = [False] * (len(s) + 1)
        dp[len(s)] = True
        wordSet = set(wordDict)

        for index in range(len(s) - 1, -1, -1):
            for word in wordSet:
                if (index+len(word)) <= len(s) and s[index:index+len(word)] == word:
                    dp[index] = dp[index+len(word)]
                
                if dp[index] == True:
                    break
        
        return dp[0]
        
        