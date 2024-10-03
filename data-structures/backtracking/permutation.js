function permutation(nums) {
  const permutations = [];

  function backtrack(permutation, options) {
    if (permutation.length === nums.length) {
      permutations.push([...permutation]);
    }

    for (let index = 0; index < options.length; index++) {
      const newValue = options[index];
      const remainingValues = options.filter(
        (_, valueIndex) => valueIndex !== index
      );

      backtrack([...permutation, newValue], remainingValues);
    }
  }

  backtrack([], nums);
  return permutations;
}
