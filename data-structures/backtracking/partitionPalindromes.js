function partitionPalindromes(s) {
  const result = [];
  const parts = [];

  function backtrack(index) {
    if (index >= s.length) {
      result.push([...parts]);
      return;
    }

    for (let nextIndex = index; nextIndex < s.length; nextIndex++) {
      if (isPalindrome(s, index, nextIndex)) {
        parts.push(s.substring(index, nextIndex + 1));
        backtrack(nextIndex + 1);
        parts.pop();
      }
    }
  }

  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;

      left += 1;
      right -= 1;
    }

    return true;
  }

  backtrack(0);
  return result;
}
