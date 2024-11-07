function maxSubArray(nums) {
  let globalMax = nums[0],
    localMax = nums[0];

  for (let index = 1; index < nums.length; index++) {
    localMax = Math.max(localMax + nums[index], nums[index]);
    globalMax = Math.max(globalMax, localMax);
  }

  return globalMax;
}
