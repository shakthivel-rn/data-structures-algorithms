function queryKthSmallest(nums, queries) {
  const result = [];

  for (const [k, trim] of queries) {
    const trimmed = nums.map((num) => num.slice(-trim));

    const indexed = trimmed.map((val, index) => [val, index]);
    indexed.sort((a, b) =>
      a[0] === b[0] ? a[1] - b[1] : a[0].localeCompare(b[0])
    );

    result.push(indexed[k - 1][1]);
  }

  return result;
}
