# Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

from typing import List

class Codec:
    def encode(self, strs: List[str]) -> str:
        encodedString = ''

        for string in strs:
            encodedString += string.replace('/', '//') + '/:'

        return encodedString

    def decode(self, s: str) -> List[str]:
        decodedString = []
        currentString = ''

        index = 0
        while index < len(s):
            if s[index:index+2] == '/:':
                decodedString.append(currentString)
                currentString = ''
                index += 2
            elif s[index:index+2] == '//':
                currentString += '/'
                index += 2
            else:
                currentString += s[index]
                index += 1
            
        return decodedString
        
        


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))