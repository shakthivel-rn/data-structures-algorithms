class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(x) {
    this.pushStack.push(x);
  }

  pop() {
    if (this.popStack.length === 0) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (this.popStack.length === 0) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.at(-1);
  }

  empty() {
    return this.pushStack.length + this.popStack.length === 0;
  }
}
