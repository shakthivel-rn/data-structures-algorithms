function possibleLetters(digits) {
  if (digits.length === 0) return [];

  const combinations = [];
  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const helper = (index, combination) => {
    if (combination.length === digits.length) {
      combinations.push(combination);
      return;
    }

    const possibleLetters = letters[digits[index]];
    for (const letter of possibleLetters) {
      helper(index + 1, combination + letter);
    }
  };

  helper(0, []);
  return combinations;
}
