function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];

  const firstIndex = getIndexBS(nums, target, true);
  const lastIndex = getIndexBS(nums, target, false);

  return [firstIndex, lastIndex];
}

const getIndexBS = (nums, target, isFirst) => {
  let left = 0,
    right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (target === nums[mid]) {
      index = mid;

      if (isFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
};
