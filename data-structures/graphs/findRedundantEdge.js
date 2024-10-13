function findRedundantEdge(edges) {
  const dsu = new DSU(edges.length);

  for (const [src, dst] of edges) {
    dsu.union(src, dst);
  }

  return dsu.redundantEdges.at(-1);
}

class DSU {
  constructor(n) {
    this.roots = Array.from({ length: n + 1 }, (_, index) => index);
    this.ranks = Array.from({ length: n + 1 }, () => 0);

    this.redundantEdges = [];
  }

  find(x) {
    if (x === this.roots[x]) return x;

    this.roots[x] = this.find(this.roots[x]);
    return this.roots[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      this.redundantEdges.push([x, y]);
    } else {
      if (this.ranks[rootX] > this.ranks[rootY]) {
        this.roots[rootY] = rootX;
      } else if (this.ranks[rootY] > this.ranks[rootX]) {
        this.roots[rootX] = rootY;
      } else {
        this.roots[rootY] = rootX;
        this.ranks[rootX] += 1;
      }
    }
  }
}
