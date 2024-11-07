function isHappy(n) {
  let slow = n;
  let fast = sumSquareDigits(n);

  while (slow !== fast) {
    fast = sumSquareDigits(fast);
    fast = sumSquareDigits(fast);
    slow = sumSquareDigits(slow);
  }

  return fast === 1;
}

function sumSquareDigits(n) {
  let output = 0;
  while (n !== 0) {
    output += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return output;
}
