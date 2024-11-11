function bubbleSort1(arr) {
  const LENGTH = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < LENGTH - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }

  return arr;
}

function bubbleSort2(arr) {
  const LENGTH = arr.length;

  for (let i = 0; i < LENGTH; i++) {
    let swapped = false;

    for (let j = 0; j < LENGTH - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (swapped === false) break;
  }

  return arr;
}

function swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
