function checkPerfectSquare(num) {
  let left = 0,
    right = 1;

  while (num > square(right)) {
    left = right;
    right *= 2;
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const squareValue = square(mid);

    if (squareValue === num) {
      return true;
    } else if (num < squareValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

const square = (num) => num * num;
