var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.popStack.length === 0) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  return this.popStack.pop();
};

MyQueue.prototype.peek = function () {
  if (this.popStack.length === 0) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  return this.popStack.at(-1);
};

MyQueue.prototype.empty = function () {
  return this.pushStack.length + this.popStack.length === 0;
};
