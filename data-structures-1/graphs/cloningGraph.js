function cloningGraph(node) {
  if (node === null) return null;

  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);

    const newNode = new Node(node.val);
    map.set(node, newNode);
    newNode.neighbors = node.neighbors.map((neighbor) => dfs(neighbor));

    return newNode;
  }

  return dfs(node);
}

function cloningGraph(node) {
  if (node === null) return null;

  const visited = new Map();
  const queue = [node];
  visited.set(node, new Node(node.val));

  while (queue.length) {
    const node = queue.shift();

    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      visited.get(node).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
}
