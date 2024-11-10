function thirdMax(nums) {
  nums.sort((a, b) => b - a);

  let count = 1,
    prevElement = nums[0];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== prevElement) {
      count += 1;
      prevElement = nums[index];
    }

    if (count === 3) return nums[index];
  }

  return nums[0];
}
