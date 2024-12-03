function checkHappyNumber(n) {
  const seen = new Set();

  while (n !== 1) {
    n = computeHappyNumber(n);

    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
  }

  return true;
}

const computeHappyNumber = (n) => {
  let result = 0;

  while (n > 0) {
    const digit = n % 10;
    result += digit * digit;
    n = Math.floor(n / 10);
  }

  return result;
};
