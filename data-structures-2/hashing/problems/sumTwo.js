function sumTwo(nums, target) {
  const map = {};

  for (let index = 0; index < nums.length; index++) {
    if (target - nums[index] in map) {
      return [index, map[target - nums[index]]];
    }

    map[nums[index]] = index;
  }

  return [-1, -1];
}

function sumTwo(nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    if (map.has(complement)) {
      return [index, map.get(complement)];
    }

    map.set(nums[index], index);
  }

  return [-1, -1];
}
