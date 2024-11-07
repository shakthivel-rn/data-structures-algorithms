class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }

  addWord(word) {
    let node = this;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }
}

class SearchingWord2 {
  findWords(board, words) {
    const root = new TrieNode();
    for (const word of words) {
      root.addWord(word);
    }

    const ROWS = board.length,
      COLS = board[0].length;
    const result = new Set(),
      visited = new Set();

    function helper(row, col, node, word) {
      if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return;
      if (visited.has(`${row},${col}`) || !node.children[board[row][col]])
        return;

      visited.add(`${row},${col}`);
      node = node.children[board[row][col]];
      word += board[row][col];

      if (node.isEndOfWord) {
        result.add(word);
      }

      helper(row - 1, col, node, word);
      helper(row + 1, col, node, word);
      helper(row, col - 1, node, word);
      helper(row, col + 1, node, word);

      visited.delete(`${row},${col}`);
    }

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        helper(row, col, root, "");
      }
    }

    return Array.from(result);
  }
}
