# https://leetcode.com/problems/coin-change/

class Solution1(object):
    def coinChange(self, coins, amount):
        memo = {}

        def backtrack(coins, remaining):
            if remaining == 0:
                return 0

            if remaining < 0:
                return float('inf')

            if remaining in memo:
                return memo[remaining]
            
            memo[remaining] = min([1 + backtrack(coins, remaining - coin) for coin in coins])
            return memo[remaining]

        minimum = backtrack(coins, amount)
        return minimum if minimum < float('inf') else -1
    
class Solution2(object):
    def coinChange(self, coins, amount):
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for individualAmount in range(1, amount + 1):
            for individualCoin in coins:
                if individualCoin <= individualAmount:
                    dp[individualAmount] = min(dp[individualAmount], 1 + dp[individualAmount - individualCoin])
        
        return dp[amount] if dp[amount] != amount + 1 else -1

        