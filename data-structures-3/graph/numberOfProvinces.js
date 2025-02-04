// <------------------------------------------------->
// DSU
function numberOfProvinces(isConnected) {
  const N = isConnected.length;
  const dsu = new DSU(N);

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (row !== col && isConnected[row][col] === 1) {
        dsu.union(row, col);
      }
    }
  }

  return dsu.connectedComponents;
}

class DSU {
  constructor(n) {
    this.roots = Array.from({ length: n }, (_, index) => index);
    this.ranks = Array.from({ length: n }, () => 0);
    this.connectedComponents = n;
  }

  find(x) {
    if (x === this.roots[x]) return x;

    this.roots[x] = this.find(this.roots[x]);
    return this.roots[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.ranks[rootX] > this.ranks[rootY]) {
        this.roots[rootY] = rootX;
      } else if (this.ranks[rootY] > this.ranks[rootX]) {
        this.roots[rootX] = rootY;
      } else {
        this.roots[rootY] = rootX;
        this.ranks[rootX] += 1;
      }

      this.connectedComponents -= 1;
    }
  }
}
// <------------------------------------------------->
// DFS
function numberOfProvinces(isConnected) {
  const N = isConnected.length;
  const visited = Array.from({ length: N }, () => false);
  let numberOfComponents = 0;

  const helper = (node) => {
    visited[node] = true;

    for (let nextNode = 0; nextNode < N; nextNode++) {
      if (isConnected[node][nextNode] && visited[nextNode] === false) {
        helper(nextNode);
      }
    }
  };

  for (let node = 0; node < N; node++) {
    if (visited[node] === false) {
      numberOfComponents += 1;
      helper(node);
    }
  }

  return numberOfComponents;
}
// <------------------------------------------------->
// BFS
var numberOfProvinces = function (isConnected) {
  const N = isConnected.length;
  const visited = Array.from({ length: N }, () => false);
  let numberOfComponents = 0;

  const helper = (node) => {
    const queue = [node];
    visited[node] = true;

    while (queue.length) {
      const node = queue.shift();

      for (let nextNode = 0; nextNode < N; nextNode++) {
        if (isConnected[node][nextNode] && visited[nextNode] === false) {
          queue.push(nextNode);
          visited[nextNode] = true;
        }
      }
    }
  };

  for (let node = 0; node < N; node++) {
    if (visited[node] === false) {
      helper(node);
      numberOfComponents += 1;
    }
  }

  return numberOfComponents;
};
