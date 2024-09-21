class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordSearch {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  search(word) {
    return this.searchRecursive(word, 0, this.root);
  }

  searchRecursive(word, index, node) {
    if (index === word.length) {
      return node.isEndOfWord;
    }

    const char = word[index];

    if (char === ".") {
      for (const child in node.children) {
        if (this.searchRecursive(word, index + 1, node.children[child])) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children[char]) {
        return false;
      }

      return this.searchRecursive(word, index + 1, node.children[char]);
    }
  }
}
