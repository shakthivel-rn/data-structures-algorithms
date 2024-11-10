function compareHeight(heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let mismatch = 0;

  for (let index = 0; index < heights.length; index++) {
    if (heights[index] !== expected[index]) {
      mismatch += 1;
    }
  }

  return mismatch;
}
