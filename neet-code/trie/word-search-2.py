# https://leetcode.com/problems/word-search-ii/description/

class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False
    
    def addWord(self, word):
        curr = self

        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        
        curr.isWord = True

class Solution(object):
    def findWords(self, board, words):
        root = TrieNode()
        for word in words:
            root.addWord(word)
        
        ROWS, COLS = len(board), len(board[0])
        res, visited = set(), set()

        def dfs(row, col, node, word):
            if (row < 0 or col < 0 or row == ROWS or col == COLS or (row, col) in visited or board[row][col] not in node.children):
                return

            visited.add((row, col))
            node = node.children[board[row][col]]
            word += board[row][col]
            if node.isWord:
                res.add(word)
            
            dfs(row - 1, col, node, word)
            dfs(row + 1, col, node, word)
            dfs(row, col - 1, node, word)
            dfs(row, col + 1, node, word)

            visited.remove((row, col))
        
        for row in range(ROWS):
            for col in range(COLS):
                dfs(row, col, root, "")
        
        return list(res)