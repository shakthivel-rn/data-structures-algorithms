function duplicateZeros(arr) {
  let zerosToDuplicate = 0;
  let originalLength = arr.length;

  for (let index = 0; index < originalLength - zerosToDuplicate; index++) {
    if (arr[index] === 0) {
      if (index === originalLength - zerosToDuplicate - 1) {
        arr[originalLength - 1] = 0;
        originalLength -= 1;
        break;
      }

      zerosToDuplicate += 1;
    }
  }

  for (let index = originalLength - zerosToDuplicate - 1; index >= 0; index--) {
    if (arr[index] === 0) {
      arr[index + zerosToDuplicate] = 0;
      zerosToDuplicate -= 1;
      arr[index + zerosToDuplicate] = 0;
    } else {
      arr[index + zerosToDuplicate] = arr[index];
    }
  }
}
