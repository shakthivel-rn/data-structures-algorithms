function moveEvenNumber(nums) {
  let evenIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 === 0) {
      [nums[index], nums[evenIndex]] = [nums[evenIndex], nums[index]];
      evenIndex += 1;
    }
  }

  return nums;
}
