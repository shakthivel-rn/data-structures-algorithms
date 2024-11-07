function characterAtmostInPartition(S) {
  const indexMap = {},
    result = [];

  for (let index = 0; index < S.length; index++) {
    indexMap[S[index]] = index;
  }

  let size = 0,
    endIndex = 0;
  for (let index = 0; index < S.length; index++) {
    endIndex = Math.max(endIndex, indexMap[S[index]]);
    size += 1;

    if (index === endIndex) {
      result.push(size);
      size = 0;
    }
  }

  return result;
}
