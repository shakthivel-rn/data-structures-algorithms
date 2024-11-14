function minimumAbsDiff(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;

  const count = Array.from({ length: range }, () => 0);
  for (const num of arr) {
    count[num - min] += 1;
  }

  let index = 0;
  for (let k = 0; k < range; k++) {
    if (count[k] > 0) {
      arr[index] = k + min;
      index += 1;
    }
  }

  let minDiff = max - min;
  for (let k = 0; k < arr.length - 1; k++) {
    minDiff = Math.min(minDiff, arr[k + 1] - arr[k]);
  }

  const pairs = [];
  for (let k = 0; k < arr.length - 1; k++) {
    if (arr[k + 1] - arr[k] === minDiff) {
      pairs.push([arr[k], arr[k + 1]]);
    }
  }

  return pairs;
}
