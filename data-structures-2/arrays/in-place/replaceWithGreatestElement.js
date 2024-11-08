function replaceWithGreatestElement(arr) {
  let greatestElement = -1;

  for (let index = arr.length - 1; index >= 0; index--) {
    const currNum = arr[index];
    arr[index] = greatestElement;
    greatestElement = Math.max(greatestElement, currNum);
  }

  return arr;
}
