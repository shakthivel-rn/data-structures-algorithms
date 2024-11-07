function findNumbers(nums) {
  let evenCount = 0;

  for (const num of nums) {
    const digitCount = findDigitCount(num);

    if (digitCount % 2 === 0) evenCount += 1;
  }

  return evenCount;
}

function findDigitCount(num) {
  let digitCount = 0;

  while (num > 0) {
    digitCount += 1;
    num = Math.floor(num / 10);
  }

  return digitCount;
}
