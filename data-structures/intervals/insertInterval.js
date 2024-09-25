class InsertInterval {
  insert(intervals, newInterval) {
    const length = intervals.length;
    const result = [];
    let index = 0;

    while (index < length && newInterval[0] > intervals[index][1]) {
      result.push(intervals[index]);
      index += 1;
    }

    while (index < length && newInterval[1] >= intervals[index][0]) {
      newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
      index += 1;
    }
    result.push(newInterval);

    while (index < length) {
      result.push(intervals[index]);
      index += 1;
    }

    return result;
  }
}
