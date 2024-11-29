function findPeakElement(nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid + 1] > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}
