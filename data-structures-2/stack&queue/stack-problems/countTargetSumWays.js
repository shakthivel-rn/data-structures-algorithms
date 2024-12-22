function countTargetSumWays(nums, target) {
  function exploreWays(currentSum, currentIndex) {
    if (currentIndex === nums.length) {
      return currentSum === target ? 1 : 0;
    }

    const add = exploreWays(currentSum + nums[currentIndex], currentIndex + 1);
    const subtract = exploreWays(
      currentSum - nums[currentIndex],
      currentIndex + 1
    );

    return add + subtract;
  }

  return exploreWays(0, 0);
}
