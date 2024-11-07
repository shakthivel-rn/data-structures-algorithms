class SquareCount {
  constructor() {
    this.ptsCount = new Map();
    this.pts = [];
  }

  add(point) {
    const p = point.join(",");
    this.ptsCount.set(p, (this.ptsCount.get(p) || 0) + 1);
    this.pts.push(point);
  }

  count(point) {
    let result = 0;
    const [px, py] = point;

    for (const [x, y] of this.pts) {
      if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) {
        continue;
      }

      result +=
        (this.ptsCount.get(`${x},${py}`) || 0) *
        (this.ptsCount.get(`${px},${y}`) || 0);
    }

    return result;
  }
}
