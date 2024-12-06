function containsNearestDuplicate(nums, k) {
  const indexMap = new Map();

  for (const [index, num] of nums.entries()) {
    if (indexMap.has(num)) {
      const prevIndex = indexMap.get(num);

      if (Math.abs(index - prevIndex) <= k) {
        return true;
      }
    }
    indexMap.set(num, index);
  }

  return false;
}
