function removeDuplicates(nums) {
  const seen = new Set();
  let insertIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (!seen.has(nums[index])) {
      seen.add(nums[index]);
      swap(nums, insertIndex, index);
      insertIndex += 1;
    }
  }

  return insertIndex;
}

function removeDuplicates(nums) {
  let insertIndex = 1;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[insertIndex] = nums[index];
      insertIndex += 1;
    }
  }

  return insertIndex;
}

function swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
