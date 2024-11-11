function sortColors(nums) {
  let left = 0,
    right = nums.length - 1,
    index = 0;

  while (index <= right) {
    if (nums[index] === 0) {
      swap(nums, left, index);
      left += 1;
      index += 1;
    } else if (nums[index] === 1) {
      index += 1;
    } else {
      swap(nums, right, index);
      right -= 1;
    }
  }

  return nums;
}

function swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
