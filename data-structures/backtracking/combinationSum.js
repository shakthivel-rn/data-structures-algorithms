function combinationSum(nums, target) {
  const result = [];

  function dfs(index, current, total) {
    if (total === target) {
      result.push([...current]);
      return;
    }

    if (index >= nums.length || total > target) return;

    current.push(nums[index]);
    dfs(index, current, total + nums[index]);

    current.pop();
    dfs(index + 1, current, total);
  }

  dfs(0, [], 0);
  return result;
}
