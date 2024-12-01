function binarySearchUnbounded(reader, target) {
  let left = 0,
    right = 1;

  while (target > reader.get(right) && reader.get(right) < 2 ** 31 - 1) {
    left = right;
    right *= 2;
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = reader.get(mid);

    if (value === target) {
      return mid;
    } else if (target < value || value === 2 ** 31 - 1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
