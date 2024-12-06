function longestUniqueSubstring(s) {
  const charMap = {};
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    charMap[currentChar] ??= 0;
    charMap[currentChar]++;

    while (charMap[currentChar] > 1) {
      const leftChar = s[left];
      charMap[leftChar]--;
      if (charMap[leftChar] === 0) {
        delete charMap[leftChar];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
