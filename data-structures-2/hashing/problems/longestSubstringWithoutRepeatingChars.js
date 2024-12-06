function longestSubstringWithoutRepeatingChars(s) {
  const charIndexMap = {};
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (currentChar in charIndexMap) {
      left = Math.max(left, charIndexMap[currentChar]);
    }

    maxLength = Math.max(maxLength, right - left + 1);
    charIndexMap[currentChar] = right + 1;
  }

  return maxLength;
}
