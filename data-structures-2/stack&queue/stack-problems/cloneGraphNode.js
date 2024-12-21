function cloneGraphNode(node) {
  if (!node) return null;

  const visited = new Map();

  function clone(node) {
    if (visited.has(node)) return visited.get(node);

    const copy = new _Node(node.val);
    visited.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  }

  return clone(node);
}
