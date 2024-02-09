# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.

from collections import Counter

class Solution1:
    def characterReplacement(self, s: str, k: int) -> int:
        low, high = 1, len(s) + 1

        while low + 1 < high:
            mid = low + (high - low) // 2

            if self.canMakeValidSubString(s, mid, k):
                low = mid
            else:
                high = mid

        return low

    def canMakeValidSubString(self, s: str, subStringLength: int, k: int):
        frequencyMap = Counter()
        maxFrequency = 0
        start = 0

        for end in range(len(s)):
            frequencyMap[s[end]] += 1

            if end - start + 1 > subStringLength:
                frequencyMap[s[start]] -= 1
                start += 1
            
            maxFrequency = max(maxFrequency, frequencyMap[s[end]])
            if subStringLength - maxFrequency <= k:
                return True
        
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        windowStart = maxFrequency = longestSubstring = 0
        frequencyCounter = Counter()

        for windowEnd in range(len(s)):
            rightChar = s[windowEnd]
            frequencyCounter[rightChar] += 1
            maxFrequency = max(maxFrequency, frequencyCounter[rightChar])

            if (windowEnd - windowStart + 1) - maxFrequency > k:
                leftChar = s[windowStart]
                frequencyCounter[leftChar] -= 1
                windowStart += 1

            longestSubstring = max(longestSubstring, windowEnd - windowStart + 1)

        return longestSubstring 
        