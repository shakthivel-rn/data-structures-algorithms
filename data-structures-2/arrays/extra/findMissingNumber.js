function findMissingNumber(nums) {
  const seen = new Set();
  const result = [];

  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
    }
  }

  for (let num = 1; num < nums.length + 1; num++) {
    if (!seen.has(num)) {
      result.push(num);
    }
  }

  return result;
}

function findMissingNumber(nums) {
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    const newIndex = Math.abs(nums[index]) - 1;

    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  for (let num = 1; num < nums.length + 1; num++) {
    if (nums[num - 1] > 0) {
      result.push(num);
    }
  }

  return result;
}
