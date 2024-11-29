function kCloses(arr, k, x) {
  let left = 0,
    right = arr.length - 1;

  while (right - left >= k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return arr.slice(left, right + 1);
}
