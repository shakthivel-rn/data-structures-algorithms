function checkValidTree(n, edges) {
  const STATE = {
    unvisited: 0,
    visited: 1,
  };

  if (edges.length !== n - 1) return false;

  const adjList = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => STATE.unvisited);

  for (const [src, dst] of edges) {
    adjList[src].push(dst);
    adjList[dst].push(src);
  }

  function hasCycle(node, parent) {
    visited[node] = STATE.visited;
    for (const neighbor of adjList[node]) {
      if (visited[neighbor] === STATE.unvisited) {
        if (hasCycle(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }

  if (hasCycle(0, -1)) return false;

  for (let node = 0; node < n; node++) {
    if (visited[node] === STATE.unvisited) return false;
  }

  return true;
}
