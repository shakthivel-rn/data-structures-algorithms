function firstBadVersion(n) {
  let left = 1,
    right = n;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}
