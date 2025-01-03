function kthLargest(nums, k) {
  const n = nums.length;

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(nums, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];

    if (i === n - k) return nums[i];

    heapify(nums, 0, i);
  }

  return nums[0];
}

function heapify(nums, i, n) {
  let largest = i;
  const left = 2 * i + 1,
    right = 2 * i + 2;

  if (left < n && nums[left] > nums[largest]) largest = left;
  if (right < n && nums[right] > nums[largest]) largest = right;

  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    heapify(nums, largest, n);
  }
}
