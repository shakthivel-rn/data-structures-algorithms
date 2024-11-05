function fastPower(x, n) {
  if (x === 0) return 0;

  function helper(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    const half = helper(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : x * half * half;
  }

  const result = helper(x, Math.abs(n));
  return n >= 0 ? result : 1 / result;
}
