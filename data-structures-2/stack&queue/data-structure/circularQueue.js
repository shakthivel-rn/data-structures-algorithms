class CircularQueue {
  constructor(k) {
    this.queue = Array.from({ length: k }, () => 0);
    this.start = -1;
    this.end = -1;
  }

  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.start = 0;
    this.end = (this.end + 1) % this.queue.length;
    this.queue[this.end] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.start === this.end) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.queue.length;
    }
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.start];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.end];
  }

  isEmpty() {
    return this.start === -1;
  }

  isFull() {
    return (this.end + 1) % this.queue.length === this.start;
  }
}
