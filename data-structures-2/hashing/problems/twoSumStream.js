var TwoSum = function () {
  this.numbers = {};
};

TwoSum.prototype.add = function (num) {
  this.numbers[num] = (this.numbers[num] || 0) + 1;
};

TwoSum.prototype.find = function (target) {
  for (const key in this.numbers) {
    const num = Number(key);
    const complement = target - num;

    if (complement !== num) {
      if (complement in this.numbers) {
        return true;
      }
    } else {
      if (this.numbers[num] > 1) {
        return true;
      }
    }
  }

  return false;
};
