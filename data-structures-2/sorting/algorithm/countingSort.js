const arr = [4, 2, 2, 8, 3, 3, 1];

// Unstable Version
function countingSort1(arr) {
  const max = Math.max(...arr);
  const count = Array.from({ length: max + 1 }, () => 0);

  for (const num of arr) {
    count[num] += 1;
  }

  let startIndex = 0;
  for (let index = 0; index < count.length; index++) {
    while (count[index] > 0) {
      arr[startIndex] = index;
      count[index] -= 1;
      startIndex += 1;
    }
  }

  return arr;
}

// Stable Version
function countingSort2(arr) {
  const max = Math.max(...arr);
  const count = Array.from({ length: max + 1 }, () => 0);

  for (const num of arr) {
    count[num] += 1;
  }

  let startIndex = 0;
  for (let index = 0; index < count.length; index++) {
    const countValue = count[index];
    count[index] = startIndex;
    startIndex += countValue;
  }

  const sortedArr = Array.from({ length: arr.length }, () => 0);
  for (const num of arr) {
    sortedArr[count[num]] = num;
    count[num] += 1;
  }

  return sortedArr;
}

// Stable Version handling negative numbers
function countingSort3(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = Array.from({ length: range + 1 }, () => 0);

  for (const num of arr) {
    count[num - min] += 1;
  }

  let startIndex = 0;
  for (let index = 0; index < count.length; index++) {
    const countValue = count[index];
    count[index] = startIndex;
    startIndex += countValue;
  }

  const sortedArr = Array.from({ length: arr.length }, () => 0);
  for (const num of arr) {
    sortedArr[count[num - min]] = num;
    count[num - min] += 1;
  }

  return sortedArr;
}

const negArr = [1, 4, -5, 2, -3, -1];
console.log(countingSort3(negArr));
