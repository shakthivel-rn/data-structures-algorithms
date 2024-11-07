function findMaxConsecutiveOnes(nums) {
  let globalMax = 0;
  let localMax = 0;

  for (const num of nums) {
    if (num === 1) {
      localMax += 1;
      globalMax = Math.max(globalMax, localMax);
    } else {
      localMax = 0;
    }
  }

  return globalMax;
}
