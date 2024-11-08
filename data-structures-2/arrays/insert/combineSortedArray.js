function combineSortedArray(nums1, m, nums2, n) {
  let firstIndex = m - 1,
    secondIndex = n - 1;

  for (let index = m + n - 1; index >= 0; index--) {
    if (secondIndex < 0) break;

    if (firstIndex >= 0 && nums1[firstIndex] > nums2[secondIndex]) {
      nums1[index] = nums1[firstIndex];
      firstIndex -= 1;
    } else {
      nums1[index] = nums2[secondIndex];
      secondIndex -= 1;
    }
  }

  return nums1;
}
