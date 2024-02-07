# Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

from typing import List
from collections import defaultdict

class Solution1:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram = defaultdict(list)

        for string in strs:
            anagram[tuple(sorted(string))].append(string)
        
        return anagram.values()


class Solution2:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for string in strs:
            counter = [0] * 26

            for char in string:
                counter[ord(char) - ord('a')] += 1
            
            anagrams[tuple(counter)].append(string)
        
        return anagrams.values()

        