function productExceptSelf(nums) {
  const leftProduct = Array.from({ length: nums.length }, () => 1);
  const rightProduct = Array.from({ length: nums.length }, () => 1);
  const product = Array.from({ length: nums.length }, () => 0);

  for (let index = 1; index < nums.length; index++) {
    leftProduct[index] = leftProduct[index - 1] * nums[index - 1];
  }
  for (let index = nums.length - 2; index >= 0; index--) {
    rightProduct[index] = rightProduct[index + 1] * nums[index + 1];
  }

  for (let index = 0; index < product.length; index++) {
    product[index] = leftProduct[index] * rightProduct[index];
  }

  return product;
}

function productExceptSelf(nums) {
  const product = Array.from({ length: nums.length }, () => 1);

  for (let index = 1; index < nums.length; index++) {
    product[index] = product[index - 1] * nums[index - 1];
  }

  let rightProduct = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    product[index] *= rightProduct;
    rightProduct *= nums[index];
  }

  return product;
}
