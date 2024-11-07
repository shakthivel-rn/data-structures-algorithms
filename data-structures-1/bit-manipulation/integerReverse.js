function integerReverse(x) {
  const MIN = -2147483648;
  const MAX = 2147483647;

  let result = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);

    if (result > MAX / 10 || (result === MAX / 10 && digit > MAX % 10)) {
      return 0;
    }
    if (result < MIN / 10 || (result === MIN / 10 && digit < MIN % 10)) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
}
