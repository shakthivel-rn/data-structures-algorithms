function MinValueStack() {
  this.stack = [];
  this.minStack = [];
}

MinValueStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

MinValueStack.prototype.pop = function () {
  const val = this.stack.pop();
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

MinValueStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinValueStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
