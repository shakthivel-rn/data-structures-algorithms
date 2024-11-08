function validMountain(arr) {
  const N = arr.length;
  let index = 0;

  while (index + 1 < N && arr[index] < arr[index + 1]) {
    index += 1;
  }

  if (index === 0 || index === N - 1) {
    return false;
  }

  while (index + 1 < N && arr[index] > arr[index + 1]) {
    index += 1;
  }

  return index === N - 1;
}
