function categorizeWordsByAnagrams(wordList) {
  const groupedAnagrams = {};

  for (const word of wordList) {
    const sortedCharacters = word.split("").sort().join("");
    groupedAnagrams[sortedCharacters] ??= [];
    groupedAnagrams[sortedCharacters].push(word);
  }

  return Object.values(groupedAnagrams);
}
