# Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "". The testcases will be generated such that the answer is unique.

from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        windowStart, matched, subStrStart = 0, 0, 0
        minLength = float('inf')
        charFreq = Counter(t)

        for windowEnd in range(len(s)):
            rightChar = s[windowEnd]

            if rightChar in charFreq:
                charFreq[rightChar] -= 1

                if charFreq[rightChar] == 0:
                    matched += 1
            
            while matched == len(charFreq):
                if windowEnd - windowStart + 1 < minLength:
                    minLength = windowEnd - windowStart + 1
                    subStrStart = windowStart
                
                leftChar = s[windowStart]
                windowStart += 1

                if leftChar in charFreq:
                    if charFreq[leftChar] == 0:
                        matched -= 1
                    
                    charFreq[leftChar] += 1
        
        if minLength > len(s):
            return ''

        return s[subStrStart:subStrStart+minLength]
            
        