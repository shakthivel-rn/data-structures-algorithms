# https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

class WordDictionary(object):
    def __init__(self):
        self.trie = {}

    def addWord(self, word):
        node = self.trie

        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        
        node['$'] = True

    def search(self, word):
        def helper(word, node):
            for index, char in enumerate(word):
                if char not in node:
                    if char == '.':
                        for x in node:
                            if x != '$' and helper(word[index + 1:], node[x]):
                                return True
                    return False
                else:
                    node = node[char]
            
            return '$' in node
        
        return helper(word, self.trie)
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)