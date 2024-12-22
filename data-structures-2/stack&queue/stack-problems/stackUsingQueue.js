class MyStack {
  constructor() {
    this.mainQueue = [];
    this.tempQueue = [];
  }

  push(x) {
    this.mainQueue.push(x);
  }

  pop() {
    while (this.mainQueue.length > 1) {
      this.tempQueue.push(this.mainQueue.shift());
    }

    const result = this.mainQueue.shift();

    while (this.tempQueue.length) {
      this.mainQueue.push(this.tempQueue.shift());
    }

    return result;
  }

  top() {
    return this.mainQueue.at(-1);
  }

  empty() {
    return this.mainQueue.length === 0;
  }
}
