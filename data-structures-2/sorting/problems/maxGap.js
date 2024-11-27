function maxGap(nums) {
  if (nums == null || nums.length < 2)
    // check if array is empty or small sized
    return 0;

  nums.sort((a, b) => a - b); // sort the array

  var maxGap = 0;

  for (var i = 0; i < nums.length - 1; i++)
    maxGap = Math.max(nums[i + 1] - nums[i], maxGap);

  return maxGap;
}

// Radix Sort
function maximumGap(nums) {
  if (!nums || nums.length < 2) return 0;

  const max = Math.max(...nums),
    radix = 10;
  let exp = 1;
  let aux = Array.from({ length: nums.length });

  while (Math.floor(max / exp) > 0) {
    let count = Array.from({ length: radix }, () => 0);

    for (const num of nums) {
      count[Math.floor(num / exp) % 10] += 1;
    }

    for (let index = 1; index < count.length; index++) {
      count[index] += count[index - 1];
    }

    for (let index = nums.length - 1; index >= 0; index--) {
      aux[--count[Math.floor(nums[index] / exp) % 10]] = nums[index];
    }

    for (let index = 0; index < nums.length; index++) {
      nums[index] = aux[index];
    }

    exp *= 10;
  }

  let maxGap = 0;
  for (let index = 0; index < nums.length - 1; index++) {
    maxGap = Math.max(maxGap, nums[index + 1] - nums[index]);
  }

  return maxGap;
}
