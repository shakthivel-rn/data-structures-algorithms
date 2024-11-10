function findDisappearedNumbers(nums) {
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
