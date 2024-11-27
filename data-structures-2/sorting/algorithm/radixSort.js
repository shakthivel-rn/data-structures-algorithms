function radixSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let index = 0; index < arr.length; index++) {
    arr[index] -= min;
  }

  let placeVal = 1;
  while (placeVal <= max) {
    countingSort(arr, placeVal);
    placeVal *= 10;
  }

  for (let index = 0; index < arr.length; index++) {
    arr[index] += min;
  }

  return arr;
}

function countingSort(arr, placeVal) {
  const count = Array.from({ length: 10 }, () => 0);

  for (const num of arr) {
    const digit = Math.floor(num / placeVal) % 10;
    count[digit] += 1;
  }

  let startIndex = 0;
  for (let index = 0; index < count.length; index++) {
    const countValue = count[index];
    count[index] = startIndex;
    startIndex += countValue;
  }

  const sortedArr = Array.from({ length: arr.length }, () => 0);
  for (const num of arr) {
    const digit = Math.floor(num / placeVal) % 10;
    sortedArr[count[digit]] = num;
    count[digit] += 1;
  }

  for (let index = 0; index < arr.length; index++) {
    arr[index] = sortedArr[index];
  }
}
