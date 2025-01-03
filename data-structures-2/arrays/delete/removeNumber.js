function removeNumber(nums, val) {
  let insertIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      swap(nums, insertIndex, index);
      insertIndex += 1;
    }
  }

  return insertIndex;
}

function swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
