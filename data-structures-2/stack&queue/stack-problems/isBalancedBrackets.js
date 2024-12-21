function isBalancedBrackets(s) {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];

  for (const char of s) {
    if (["{", "[", "("].includes(char)) {
      stack.push(char);
    } else {
      const topChar = stack.pop() ?? "#";
      if (topChar !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
