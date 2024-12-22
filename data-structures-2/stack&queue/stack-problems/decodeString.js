function decodeString(encodedString) {
  const stack = [];
  let currentSubstring = "";
  let currentMultiplier = 0;

  for (const char of encodedString) {
    if (!isNaN(char)) {
      currentMultiplier = currentMultiplier * 10 + Number(char);
    } else if (char === "[") {
      stack.push(currentSubstring);
      stack.push(currentMultiplier);
      currentSubstring = "";
      currentMultiplier = 0;
    } else if (char === "]") {
      const multiplier = stack.pop();
      const previousSubstring = stack.pop();
      currentSubstring =
        previousSubstring + currentSubstring.repeat(multiplier);
    } else {
      currentSubstring += char;
    }
  }

  return currentSubstring;
}
