function combinationSumWithDuplicates(candidates, target) {
  const result = [];
  const combination = [];
  candidates.sort((a, b) => a - b);

  function backtrack(index, total) {
    if (total === target) {
      result.push([...combination]);
      return;
    }

    if (total > target || index === candidates.length) return;

    combination.push(candidates[index]);
    backtrack(index + 1, total + candidates[index]);

    combination.pop();
    while (
      index + 1 < candidates.length &&
      candidates[index] === candidates[index + 1]
    ) {
      index += 1;
    }
    backtrack(index + 1, total);
  }

  backtrack(0, 0);
  return result;
}
