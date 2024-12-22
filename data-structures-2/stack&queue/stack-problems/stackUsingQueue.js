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

class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);
  }

  pop() {
    const size = this.queue.length;
    for (let i = 0; i < size - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
  }

  top() {
    const size = this.queue.length;
    for (let i = 0; i < size - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    const topElement = this.queue.shift();
    this.queue.push(topElement);
    return topElement;
  }

  empty() {
    return this.queue.length === 0;
  }
}
