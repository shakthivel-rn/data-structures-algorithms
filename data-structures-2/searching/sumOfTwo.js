function sumOfTwo(numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
}
