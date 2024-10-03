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
