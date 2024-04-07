# https://leetcode.com/problems/palindromic-substrings/

class Solution(object):
    def countSubstrings(self, s):
        result = 0

        for index in range(len(s)):
            left = right = index
            while left >= 0 and right < len(s) and s[left] == s[right]:
                result += 1
                left -= 1
                right += 1

            left = index
            right = index + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                result += 1
                left -= 1
                right += 1

        return result 
        