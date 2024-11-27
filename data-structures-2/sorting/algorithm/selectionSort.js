function selectionSort(arr) {
  const LENGTH = arr.length;

  for (let i = 0; i < LENGTH; i++) {
    let minIndex = i;

    for (let j = i + 1; j < LENGTH; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

// Selection Sort is not a stable sort
