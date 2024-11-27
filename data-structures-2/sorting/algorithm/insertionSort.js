function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i;

    while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
      swap(arr, currentIndex, currentIndex - 1);
      currentIndex -= 1;
    }
  }

  return arr;
}

function swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
