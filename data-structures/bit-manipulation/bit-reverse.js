function bitReverse(n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (n >> i) & 1;
    result += bit << (31 - i);
  }

  return result >>> 0;
}
