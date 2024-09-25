const intervalMerge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  for (const interval of intervals) {
    if (merged.length === 0 || interval[0] > merged.at(-1)[1]) {
      merged.push(interval);
    } else {
      merged.at(-1)[1] = Math.max(interval[1], merged.at(-1)[1]);
    }
  }

  return merged;
};
