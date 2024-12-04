function minIndexSum(list1, list2) {
  const indexMap = new Map();
  let result = [];

  for (let index = 0; index < list1.length; index++) {
    indexMap.set(list1[index], index);
  }

  let minIndexSum = Infinity;
  for (let index = 0; index < list2.length; index++) {
    if (indexMap.has(list2[index])) {
      const indexSum = index + indexMap.get(list2[index]);

      if (indexSum < minIndexSum) {
        minIndexSum = indexSum;
        result = [list2[index]];
      } else if (indexSum === minIndexSum) {
        result.push(list2[index]);
      }
    }
  }

  return result;
}
