function minimumRotatedArray(nums) {
  if (!nums || nums.length === 0) return -1;

  if (nums.length === 1) return nums[0];

  let left = 0,
    right = nums.length - 1;

  if (nums[right] > nums[left]) return nums[left];

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function minimumRotatedArray(nums) {
  if (!nums || nums.length === 0) return -1;

  if (nums.length === 1) return nums[0];

  let left = 0,
    right = nums.length - 1;

  if (nums[right] >= nums[left]) return nums[left];

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    }
  }

  return nums[right];
}
