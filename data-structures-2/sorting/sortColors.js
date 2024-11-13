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

function sortColors(nums) {
  if (nums.length === 0) return nums;

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  const range = max - min + 1;
  const count = Array.from({ length: range }, () => 0);

  for (let num of nums) {
    count[num - min] += 1;
  }

  let index = 0;
  for (let k = 0; k < range; k++) {
    while (count[k] > 0) {
      nums[index] = k + min;

      index += 1;
      count[k] -= 1;
    }
  }

  return nums;
}
