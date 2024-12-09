function countFourSumZero(arr1, arr2, arr3, arr4) {
  const pairSums = new Map();
  let totalTuples = 0;

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      const sum = num1 + num2;
      pairSums.set(sum, (pairSums.get(sum) || 0) + 1);
    }
  }

  for (const num3 of arr3) {
    for (const num4 of arr4) {
      const complement = -(num3 + num4);
      if (pairSums.has(complement)) {
        totalTuples += pairSums.get(complement);
      }
    }
  }

  return totalTuples;
}
