function subsetsWithDuplicates(nums) {
  const result = [];
  const subset = [];

  nums.sort((a, b) => a - b);

  function backtrack(start) {
    result.push([...subset]);

    for (let index = start; index < nums.length; index++) {
      if (index > start && nums[index] === nums[index - 1]) {
        continue;
      }

      subset.push(nums[index]);
      backtrack(index + 1);
      subset.pop();
    }
  }

  backtrack(0);
  return result;
}

function subsetsWithDuplicates(nums) {
  const result = [];
  const subset = [];
  nums.sort((a, b) => a - b);

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    backtrack(index + 1, subset);

    subset.pop();
    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index += 1;
    }
    backtrack(index + 1, subset);
  }

  backtrack(0);
  return result;
}
