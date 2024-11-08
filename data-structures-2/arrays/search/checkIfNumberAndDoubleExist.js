function checkIfExist(arr) {
  if (arr.length === 0 || arr === null) return false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[i] === arr[j] / 2) {
        return true;
      }
    }
  }

  return false;
}
