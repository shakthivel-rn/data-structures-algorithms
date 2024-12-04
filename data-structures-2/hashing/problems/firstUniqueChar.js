function firstUniqueChar(s) {
  const countMap = new Map();

  for (const char of s) {
    if (!countMap.has(char)) countMap.set(char, 0);
    countMap.set(char, countMap.get(char) + 1);
  }

  for (let index = 0; index < s.length; index++) {
    if (countMap.get(s[index]) === 1) {
      return index;
    }
  }

  return -1;
}
