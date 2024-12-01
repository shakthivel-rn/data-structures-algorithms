function intersectionArray(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  const result = new Set();

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.add(nums1[i]);

      i += 1;
      j += 1;
    } else if (nums1[i] < nums2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return [...result];
}
