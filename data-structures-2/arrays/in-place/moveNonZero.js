function moveNonZero(nums) {
  let nonZeroIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      [nums[index], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[index]];
      nonZeroIndex += 1;
    }
  }

  return nums;
}
