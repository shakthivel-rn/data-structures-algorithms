function findNextGreaterCharacter(letters, target) {
  let left = 0,
    right = letters.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = letters[mid];

    if (target >= value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[right] ? letters[right] : letters[0];
}
