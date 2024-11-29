function binarySearch(nums, target) {
  let leftIndex = 0,
    rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (target < nums[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
}
