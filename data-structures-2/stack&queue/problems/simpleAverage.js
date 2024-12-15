class SimpleAverage {
  constructor(size) {
    this.size = size;
    this.window = [];
    this.sum = 0;
  }

  next(val) {
    if (this.window.length === this.size) {
      this.sum -= this.window.shift();
    }
    this.window.push(val);
    this.sum += val;
    return this.sum / this.window.length;
  }
}
