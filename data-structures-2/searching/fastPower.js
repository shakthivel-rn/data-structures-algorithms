function fastPower(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    const half = myPow(x, n / 2);
    return half * half;
  } else {
    return x * myPow(x, n - 1);
  }
}

function fastPower(x, n) {
  if (n === 0) return 1;

  if (n < 1) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  while (n > 0) {
    if (n % 2 !== 0) {
      result *= x;
    }

    x *= x;
    n = Math.floor(n / 2);
  }

  return result;
}
