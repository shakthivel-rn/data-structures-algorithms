function findDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
}

function findDuplicate(nums) {
  nums.sort((a, b) => a - b);

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === nums[index - 1]) {
      return nums[index];
    }
  }
}
