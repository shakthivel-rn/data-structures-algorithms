class ValidWordAbbr {
  constructor(dictionary) {
    this.abbrMap = new Map();

    for (const word of new Set(dictionary)) {
      // Use Set to handle duplicates
      const abbr = this._getAbbreviation(word);
      if (!this.abbrMap.has(abbr)) {
        this.abbrMap.set(abbr, word);
      } else {
        this.abbrMap.set(abbr, null); // Mark as conflicting if multiple words have the same abbreviation
      }
    }
  }

  isUnique(word) {
    const abbr = this._getAbbreviation(word);
    if (!this.abbrMap.has(abbr)) {
      return true; // No word in the dictionary with the same abbreviation
    }
    const mappedWord = this.abbrMap.get(abbr);
    return mappedWord === word; // Unique if the abbreviation maps to the same word
  }

  _getAbbreviation(word) {
    if (word.length <= 2) return word; // Words with 2 or fewer characters are their own abbreviation
    return word[0] + (word.length - 2) + word[word.length - 1];
  }
}
