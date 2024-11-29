function squareRoot(x) {
  if (x < 2) return x;
  let left = 2,
    right = Math.floor(x / 2);

  while (left <= right) {
    const num = left + Math.floor((right - left) / 2);
    const square = num * num;

    if (square === x) {
      return num;
    } else if (x < square) {
      right = num - 1;
    } else {
      left = num + 1;
    }
  }

  return right;
}
