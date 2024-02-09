# Given a string s, find the length of the longest substring without repeating characters.

from collections import Counter

class Solution1:
    def lengthOfLongestSubstring(self, s: str) -> int:
        def check(start, end):
            seen = set()

            for index in range(start, end + 1):
                char = s[index]
                if char in seen:
                    return False
                seen.add(char)
            
            return True
        
        result = 0

        for i in range(len(s)):
            for j in range(i, len(s)):
                if check(i, j):
                    result = max(result, j - i + 1)
        
        return result
    
class Solution2:
    def lengthOfLongestSubstring(self, s: str) -> int:
        counter = Counter()
        left = right = 0
        result = 0

        while right < len(s):
            rightChar = s[right]
            counter[rightChar] += 1

            while counter[rightChar] > 1:
                leftChar = s[left]
                counter[leftChar] -= 1
                left += 1

            result = max(result, right - left + 1)
            right += 1

        return result 

class Solution3:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        indexMap = {}

        i = 0
        for j in range(len(s)):
            if s[j] in indexMap:
                i = max(indexMap[s[j]], i)
            
            result = max(result, j - i + 1)
            indexMap[s[j]] = j + 1
        
        return result
        