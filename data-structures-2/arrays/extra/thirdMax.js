function thirdMax(nums) {
  nums.sort((a, b) => b - a);

  let count = 1,
    prevElement = nums[0];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== prevElement) {
      count += 1;
      prevElement = nums[index];
    }

    if (count === 3) return nums[index];
  }

  return nums[0];
}

function thirdMax(nums) {
  let firstMax = Number.MIN_SAFE_INTEGER,
    secondMax = Number.MIN_SAFE_INTEGER,
    thirdMax = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    if (firstMax === num || secondMax === num || thirdMax === num) {
      continue;
    }

    if (num >= firstMax) {
      [thirdMax, secondMax, firstMax] = [secondMax, firstMax, num];
    } else if (num >= secondMax) {
      [thirdMax, secondMax] = [secondMax, num];
    } else if (num >= thirdMax) {
      thirdMax = num;
    }
  }

  if (thirdMax === Number.MIN_SAFE_INTEGER) {
    return firstMax;
  }

  return thirdMax;
}
