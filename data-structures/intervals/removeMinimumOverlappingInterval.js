function removeMinimumOverlappingInterval(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let prevEnd = intervals[0][1];

  for (let index = 1; index < intervals.length; index++) {
    const start = intervals[index][0];
    const end = intervals[index][1];

    if (start < prevEnd) {
      count += 1;
    } else {
      prevEnd = end;
    }
  }

  return count;
}
