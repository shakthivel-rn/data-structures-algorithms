function majorityElement(nums) {
  const counts = {};

  for (const num of nums) {
    counts[num] ??= 0;
    counts[num] += 1;
  }

  for (const num in counts) {
    if (counts[num] > nums.length / 2) return Number(num);
  }

  return 0;
}

function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

function majorityElement(nums) {
  const helper = (left, right) => {
    if (left === right) return nums[left];

    const mid = left + Math.floor((right - left) / 2);
    const leftMax = helper(left, mid);
    const rightMax = helper(mid + 1, right);

    if (leftMax === rightMax) return leftMax;

    let leftCount = 0,
      rightCount = 0;
    for (let index = left; index <= right; index++) {
      if (nums[index] === leftMax) leftCount += 1;
      if (nums[index] === rightMax) rightCount += 1;
    }

    return leftCount > rightCount ? leftMax : rightMax;
  };

  return helper(0, nums.length - 1);
}

function majorityElement(nums) {
  let count = 0,
    candidate;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += candidate === num ? 1 : -1;
  }

  return candidate;
}
