function sortedSquares(nums) {
  const squareValues = Array.from({ length: nums.length }, () => 0);
  let index = nums.length - 1;
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const startSquare = nums[start] * nums[start];
    const endSquare = nums[end] * nums[end];

    if (startSquare > endSquare) {
      squareValues[index] = startSquare;
      start += 1;
    } else {
      squareValues[index] = endSquare;
      end -= 1;
    }
    index -= 1;
  }

  return squareValues;
}
