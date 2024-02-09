# You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

from typing import List

class Solution1:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0

        for i in range(len(prices) - 1):
            for j in range(i + 1, len(prices)):
                profit = prices[j] - prices[i]

                if profit > maxProfit:
                    maxProfit = profit
        
        return maxProfit
    
class Solution2:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0
        minValue = float('inf')

        for index in range(len(prices)):
            if prices[index] < minValue:
                minValue = prices[index]
            if prices[index] - minValue > maxProfit:
                maxProfit = prices[index] - minValue
        
        return maxProfit