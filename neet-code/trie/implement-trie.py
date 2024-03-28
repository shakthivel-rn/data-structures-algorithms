# https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode:
    def __init__(self):
        self.links = [None] * 26
        self.isEnd = False
    
    def containsKey(self, ch):
        return self.links[ord(ch) - ord('a')] != None
    
    def getNode(self, ch):
        return self.links[ord(ch) - ord('a')]
    
    def setNode(self, ch, node):
        self.links[ord(ch) - ord('a')] = node
    
    def setIsEnd(self):
        self.isEnd = True
    
    def checkIsEnd(self):
        return self.isEnd

class Trie(object):
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root

        for ch in word:
            if node.containsKey(ch) == False:
                node.setNode(ch, TrieNode())
            node = node.getNode(ch)
        
        node.setIsEnd()

    def searchPrefix(self, word):
        node = self.root

        for ch in word:
            if node.containsKey(ch):
                node = node.getNode(ch)
            else:
                return None
        
        return node

    def search(self, word):
        node = self.searchPrefix(word)

        return node != None and node.checkIsEnd()

    def startsWith(self, prefix):
        node = self.searchPrefix(prefix)

        return node != None
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)