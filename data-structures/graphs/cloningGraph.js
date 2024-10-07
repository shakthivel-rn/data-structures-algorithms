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
