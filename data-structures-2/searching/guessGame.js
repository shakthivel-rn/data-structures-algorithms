function guessGame(n) {
  let left = 1,
    right = n;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const pick = guess(mid);

    if (pick === 0) {
      return mid;
    } else if (pick === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
