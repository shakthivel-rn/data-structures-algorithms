# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

class Solution1:
    def isPalindrome(self, s: str) -> bool:
        filteredChars = filter(lambda ch: ch.isalnum(), s)
        lowerCaseFilteredChars = map(lambda ch: ch.lower(), filteredChars)

        filteredCharsList = list(lowerCaseFilteredChars)
        reversedCharsList = filteredCharsList[::-1]

        return filteredCharsList == reversedCharsList
    
class Solution2:
    def isPalindrome(self, s: str) -> bool:
        leftPointer, rightPointer = 0, len(s) - 1

        while leftPointer < rightPointer:
            while leftPointer < rightPointer and not s[leftPointer].isalnum():
                leftPointer += 1
            while leftPointer < rightPointer and not s[rightPointer].isalnum():
                rightPointer -= 1
            
            if s[leftPointer].lower() != s[rightPointer].lower():
                return False
            
            leftPointer += 1
            rightPointer -= 1
        
        return True