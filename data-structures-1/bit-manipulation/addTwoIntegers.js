function addTwoIntegers(a, b) {
  function add(num, carry) {
    if (num === 0 || carry === 0) {
      return num | carry;
    }

    return add(num ^ carry, (num & carry) << 1);
  }

  return add(a, b);
}
