function RandomizedSet() {
  this.valueToIndex = new Map();
  this.values = [];
}

RandomizedSet.prototype.insert = function (value) {
  if (this.valueToIndex.has(value)) {
    return false;
  }

  this.valueToIndex.set(value, this.values.length);
  this.values.push(value);
  return true;
};

RandomizedSet.prototype.remove = function (value) {
  if (!this.valueToIndex.has(value)) {
    return false;
  }

  const index = this.valueToIndex.get(value);
  const lastValue = this.values[this.values.length - 1];

  this.values[index] = lastValue;
  this.valueToIndex.set(lastValue, index);

  this.values.pop();
  this.valueToIndex.delete(value);

  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};
