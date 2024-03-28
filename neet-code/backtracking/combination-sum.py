# https://leetcode.com/problems/combination-sum/

class Solution(object):
    def combinationSum(self, candidates, target):
        n = len(candidates)
        result = []

        def backtrack(remain, comb, start):
            if remain == 0:
                result.append(comb[:])
                return
            if remain < 0:
                return 

            for index in range(start, n):
                comb.append(candidates[index])
                backtrack(remain - candidates[index], comb, index)
                comb.pop()
            
        backtrack(target, [], 0)
        return result
        