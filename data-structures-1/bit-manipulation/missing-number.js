// Sorting
function missingNumber(nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    if (index !== nums[index]) {
      return index;
    }
  }

  return length;
}

// Hash Map
function missingNumber(nums) {
  const uniqueNums = new Set(nums);
  const length = nums.length;

  for (let index = 0; index <= length; index++) {
    if (!uniqueNums.has(index)) return index;
  }
}

// Bit Manipulation
function missingNumber(nums) {
  let missingNum = nums.length;

  for (let index = 0; index < nums.length; index++) {
    missingNum ^= index ^ nums[index];
  }

  return missingNum;
}

// Math
function missingNumber(nums) {
  let missingNum = nums.length;

  for (let index = 0; index < nums.length; index++) {
    missingNum += index - nums[index];
  }

  return missingNum;
}
