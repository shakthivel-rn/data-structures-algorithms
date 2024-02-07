# Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

from collections import Counter

class Solution1:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counterS = Counter(s)
        counterT = Counter(t)

        for char, count in counterS.items():
            if char not in counterT:
                return False

            if count != counterT[char]:
                return False

        return True
    
class Solution2:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counter = Counter()

        for index in range(len(s)):
            counter[s[index]] += 1
            counter[t[index]] -= 1
        
        for char, count in counter.items():
            if count != 0:
                return False

        return True