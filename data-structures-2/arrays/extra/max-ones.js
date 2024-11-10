function findMaxConsecutiveOnes(nums) {
  let zeroCount = 0,
    leftIndex = 0;
  let maxOnes = 0;

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    const rightValue = nums[rightIndex];

    if (rightValue === 0) {
      zeroCount += 1;
    }

    while (zeroCount > 1) {
      const leftValue = nums[leftIndex];
      leftIndex += 1;

      if (leftValue === 0) {
        zeroCount -= 1;
      }
    }

    maxOnes = Math.max(maxOnes, rightIndex - leftIndex + 1);
  }

  return maxOnes;
}
